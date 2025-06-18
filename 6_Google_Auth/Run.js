// Assume ----- Run=app.js
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const ejs = require('ejs');
const app = express();
const mongoStore = require('connect-mongo');
require('./config/passport');
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
            mongoUrl: 'mongodb://127.0.0.1:27017/Google_auth',
            collectionName: 'sessions',
        }),
        // cookie: { secure: true }
    })
);
app.use(passport.initialize());
app.use(passport.session());

//Home :get
app.get('/', (req, res) => res.render('index'));
// Register : get 
app.get('/register', (req, res) => res.render('register'));
// Register : post 
app.post('/register', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if (user) return res.status(401).render('userExists');
        const hash = await bcrypt.hash(req.body.password, saltRound);
        const newUser = new User({
            username: req.body.username,
            password: hash
        });
        await newUser.save();
        res.redirect("/login");
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
});

//CheckLoggedIn
const CheckLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/profile');
    }
    next();
}
//Login : get
app.get('/login', CheckLoggedIn, (req, res) => res.render('login'));

//Login : post
app.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/profile'
    }),
);

const CheckProfileAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('login');
}

//profile protected
app.get('/profile', CheckProfileAuthenticated, (req, res) => res.render('profile'));

// Logout : get
app.get('/logout', (req, res) => {
    try {
        req.logout((err) => {
            if (err) return next(err);
            res.render('logout');
        });
    } catch (error) {
        res.status(500).send(error.message)
    }
});
module.exports = app;