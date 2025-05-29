const express = require('express');
const cors = require('cors');
const ejs = require('ejs');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', ejs);