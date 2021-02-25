const jwt = require('jsonwebtoken');



const generarJWT = (uid) => {

    return new Promise((res, rej) => {
        const payload = {
            // Aqui no se pone información sensible
            uid
        };

        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '8h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                rej('No se pude generar el JWT');
            } else {
                res(token);
            }
        })
    });

}

module.exports = {
    generarJWT
}