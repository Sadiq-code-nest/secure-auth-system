require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const MongUser = require('./Models/user-model')
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = process.env.port || 4002;
app.post('/register', async (req, res) => {
    try {
        const userModel = new MongUser(req.body);
        await userModel.save();
        res.status(200).json(userModel);
    } catch (error) {
        res.status(500).json(error.message);
    }

});


app.post('/login', async (req, res) => {
    try {

        const { email, password } = req.body;
        const user = await MongooseSchema.findOne({ email: email });
        if (user && MongooseSchema.password === password) {
            res.status(200).json({ STATUS: 'Valid user' })

        } else { res.status(200).json({ STATUS: 'NOT VALID' }) }


    } catch (error) {
        res.status(404).send.json({ Msg: error.message })
    }
})

//DB Connnection
const DB_Connection = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/AuthSystem");
        console.log('DB is connected');
    } catch (error) {
        console.log('DB ERROR');
        console.log(error.message);
        process.exit(1);
    }
}

app.post('/login', (req, res) => res.status(200).json({ msg: ('User is log in page') }));
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.use((req, res, next) => res.status(404).json({ msg: 'Route not found' }));
app.use((err, req, res, next) => res.status(500).json({ msg: 'Something wrong' }));
app.listen(port, async () => {
    await DB_Connection();
    console.log(`Server is running at http//localhost.com:${port}`);
});