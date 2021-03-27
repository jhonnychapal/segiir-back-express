const { response } = require('express');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');
const { getMenuFrontEnd } = require('../helpers/menu-frontend');
const passwordResetToken = require('../models/passwordResetToken');


const login = async(req, res = response) => {

    const { email, password } = req.body;

    try {
        const usuarioDB = await Usuario.findOne({ email });

        // Verificar email
        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Email o contraseña incorrectos'
            });
        }

        // verificar contraseña
        const validPassword = bcrypt.compareSync(password, usuarioDB.password)
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Email o contraseña incorrectos'
            });
        }

        // Generar el token
        const token = await generarJWT(usuarioDB.id);

        res.json({
            ok: true,
            token,
            usuario: usuarioDB,
            menu: getMenuFrontEnd( usuarioDB.admin )
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        });
    }
}

const renewToken = async(req, res = response) => {

    const uid = req.uid;

    // Generar el token
    const token = await generarJWT(uid);

    const usuario = await Usuario.findById(uid);


    res.json({
        ok: true,
        token,
        usuario,
        menu: getMenuFrontEnd( usuario.admin )
    });
}

const resetPassword = async(req, res = response) =>{
    try {
        if (!req.body.email) {
            return res
            .status(500)
            .json({ message: 'El email es requerido' });
        }
        const usuarioDB = await Usuario.findOne({
            email:req.body.email
        });
        if (!usuarioDB) {
            return res
            .status(409)
            .json({ message: 'El email no existe' });
        }
        var resettoken = new passwordResetToken({ _userId: usuarioDB._id, resettoken: crypto.randomBytes(16).toString('hex') });
        resettoken.save(function (err) {
            if (err) { return res.status(500).send({ msg: err.message }); }
            passwordResetToken.find({ _userId: usuarioDB._id, resettoken: { $ne: resettoken.resettoken } }).remove().exec();
            res.status(200).json({ message: 'Reset Password successfully.' });
            var transporter = nodemailer.createTransport({
                service: 'Gmail',
                port: 465,
                auth: {
                user: 'segiir.rup@gmail.com',
                pass: 'AdminSeGIIR2021*'
                }
            });
            var mailOptions = {
                to: usuarioDB.email,
                from: 'segiir.rup@gmail.com',
                subject: 'SeGIIR Recuperación de contraseña',
                text: 'Hola ' + usuarioDB.nombre + '\n\n' + 
                'Tu has recibido este correo porque tu (o alguien más) has solicitado recuperar la contraseña de tu cuenta.\n\n' +
                'Por favor haz click en el siguiente enlace o copialo en tu navegador para completar el proceso:\n\n' +
                'https://backend-segiir.herokuapp.com/response-reset-password/' + resettoken.resettoken + '\n\n' +
                'Si tu no lo solicitaste, por favor ignora este email y tu contraseña permanecera sin ser cambiada.\n\n\n' +
                'Atentamente, \n' +
                'SeGIIR - Software' ,
            }
            transporter.sendMail(mailOptions, (err, info) => {
            })
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        });
    }   
}

const validPasswordToken = async(req,res = response)=>{
    try{
        if (!req.body.resettoken) {
            return res
            .status(500).json({ 
                ok: false,
                message: 'El token es requerido' 
            });
        }
        const usuario = await passwordResetToken.findOne({
            resettoken: req.body.resettoken
        });
        if (!usuario) {
            return res
            .status(409).json({ 
                ok: false,
                message: 'Url no válida' 
            });
        }
        Usuario.findOneAndUpdate({ uid: usuario._userId }).then(() => {
            res.status(200).json({ ok:true, message: 'Token verificado satisfactoriamente.' });
        }).catch((err) => {
            return res.status(500).send({ msg: err.message });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        });
    }
}

const newPassword = async (req,res = response) => {

    try {
        const userToken = await passwordResetToken.findOne({ resettoken: req.body.resettoken });
        if (!userToken) {
            return res
            .status(409)
            .json({ ok:false, message: 'El Token ha expirado' });
        }
        var usuarioDB = Usuario.findById(userToken._userId);

        if(!usuarioDB){
            return res.status(409).json({
                ok:false,
                msg: 'El usuario no existe'
            });
        }
        const salt = bcrypt.genSaltSync();
        const password = bcrypt.hashSync(req.body.newPassword, salt);
        const usuarioPassword = await Usuario.findByIdAndUpdate(userToken._userId, {password:password},{ new: true }) ;
        userToken.remove();
        return res.status(201).json({ 
            ok:true,
            message: 'Contraseña restablecida satisfactoriamente.',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        });
    }
}

module.exports = {
    login,
    renewToken,
    resetPassword,
    validPasswordToken,
    newPassword
};