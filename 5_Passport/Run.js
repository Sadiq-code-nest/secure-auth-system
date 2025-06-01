// Assume ----- Run=app.js
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const ejs = require('ejs');
const app = express();
const mongoStore = require('connect-mongo');
require('./config/database');
const User = require('./Models/user-model');
const bcrypt = require('bcrypt');
const saltRound = 10;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', "ejs");

// Trust first proxy
app.set('trust proxy', 1);
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        store: mongoStore.create({
            mongoUrl: 'mongodb://127.0.0.1:27017/Passport_auth',
            collectionName: 'sessions',
        }),
        // cookie: { secure: true }
    })
);

app.use(passport.initialize());
app.use(passport.session);

//Home :get
app.get('/', (req, res) => res.render('index'));
// Register : get 
app.get('/register', (req, res) => res.render('register'));
// Register : post 
app.post('/register', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user) return res.status(401).send('This user already exists');

        const hash = await bcrypt.hash(req.body.password, saltRound);

        const newUser = new User({
            username: req.body.username,
            password: hash
        });

        await newUser.save();
        res.status(201).redirect("/login");
    } catch (error) {
        res.status(500).send("Something went wrong");
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