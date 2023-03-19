const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');
const router = require('./src/routes/tasks');

app.use(methodOverride('_method' , {method: ['POST' , 'GET']}));
app.set("view engine", "ejs"); // search about views folder to run code HTML
app.use(express.urlencoded({ extended: true })); // middleware allows to read from user using form in HTML
mongoose.connect('mongodb://127.0.0.1:27017/ToDo' , {useNewUrlParser: true , useUnifiedTopology: true});
app.use(router);

app.listen(3000 , () => console.log('express started!'));
