const mongoose = require('mongoose');


const dbConnection = async() => {
    try {
        await mongoose.connect("mongodb+srv://MEAN_USER:y0wsAWsatDeSNjQA@cluster0.eqfkj.mongodb.net/hospitaldb", {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('BD ONLINE');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs')
    }
}

module.exports = {
    dbConnection
}
