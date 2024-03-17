const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const cors= require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://<user>:<password>@cluster0.example.mongodb.net/').then (() => {
    console.log('Connected to the Database');})
    .catch((err) => {
        console.log('Not Connected to the Database : ' + err);
    });
    
//importing routes from other files
