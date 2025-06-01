//Assume 5_Passport_Auth.js = index.js here
const app = require('./Run');
const DataBase_connect = require('./config/database')
require('dotenv').config();
const port = process.env.port || 4001;
app.listen(port, async () => {
    await DataBase_connect();
    console.log('Runnning')
});