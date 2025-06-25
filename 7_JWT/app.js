const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('./Models/user-model');
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Home Route
app.get('/', (req, res) => res.send('<h1> Welcome to JSON Web Token </h1>'));

// register route
app.post("/register", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user) return res.status(400).send("User already exists");
        bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
            const newUser = new User({
                username: req.body.username,
                password: hash,
            });
            await newUser
                .save()
                .then((user) => {
                    res.send({
                        success: true,
                        message: "User is created Successfully",
                        user: {
                            id: user._id,
                            username: user.username,
                        },
                    });
                })
                .catch((error) => {
                    res.send({
                        success: false,
                        message: "User is not created",
                        error: error,
                    });
                });
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//Login Route
app.post("/login", async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(401).send({
            success: false,
            message: "User is not found",
        });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).send({
            success: false,
            message: "Incorrect password",
        });
    }
    const payload = {
        id: user._id,
        username: user.username,
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "2d",
    });
    return res.status(200).send({
        success: true,
        message: "User is logged in successfully",
        token: "Bearer " + token,
    });
});

//Profile Route
app.get('/', (req, res) => res.send('<h1> Profile </h1>'));
//Route error
app.use((req, res, next) => { res.status(404).json({ message: 'Route not found' }) })
//Server Error
app.use((err, req, res, next) => { res.status(500).json({ message: 'Server not found' }) })
module.exports = app;