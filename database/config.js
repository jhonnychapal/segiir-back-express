const mongoose = require('mongoose');



const dbConnection = async() => {
    try {
        mongoose.set('useFindAndModify', false);
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

    } catch (error) {
        console.log(error);
        throw new Error('Error en el inicio de la DB')
    }

}

module.exports = {
    dbConnection
}