require('dotenv').config();
const DataBase_connect = require('./config/database');
const port = process.env.port || 4001
const app = require('./app');
app.listen(port, async () => {
    await DataBase_connect();
    console.log(`Server is running at http://localhost:${port}`)
});