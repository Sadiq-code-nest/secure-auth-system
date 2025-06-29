require("dotenv").config();
const mongoose = require("mongoose");

const DataBase_connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Passport_JWT');
        console.log('DataBase is connected');
    } catch (error) {
        console.log('DataBase ERROR!!');
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = DataBase_connect;