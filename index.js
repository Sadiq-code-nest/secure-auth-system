require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = process.env.port || 4002;
app.post('/register', (req, res) => res.status(200).json({ msg: ('Register page') }));
app.post('/login', (req, res) => res.status(200).json({ msg: ('User is log in page') }));
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.use((req, res, next) => res.status(404).json({ msg: 'Route not found' }));
app.use((err, req, res, next) => res.status(500).json({ msg: 'Something wrong' }));
app.listen(port, () => console.log(`Server is running at http//localhost.com:${port}`));