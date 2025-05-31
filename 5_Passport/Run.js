const express = require('express');
const cors = require('cors');
const ejs = require('ejs');
const app = express();
require('./config/database');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', "ejs");

//Home :get
app.get('/', (req, res) => res.render('index'));
// Register : get 
app.get('/register', (req, res) => res.render('register'));
// Register : post 
app.post('/register', (req, res) => {
    try {
        res.status(200).send('user registration done');
    } catch (error) {
        res.status(400).send(error.message);
    }
});
//Login : get
app.get('/login', (req, res) => res.render('login'));
//Login : post
app.post('/login', (req, res) => {
    try {
        res.status(200).send('user Logged in');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

//profile protected
app.get('/profile', (req, res) => res.render('profile'));
module.exports = app;