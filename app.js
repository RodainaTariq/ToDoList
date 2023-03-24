require('dotenv').config()
const PORT = process.env.PORT || 3000;
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');
const router = require('./src/routes/tasks');
app.use(methodOverride('_method'));
app.set("views", "./src/views");
app.set("view engine", "ejs"); // search about views folder to run code HTML
app.use(express.urlencoded({ extended: true })); // middleware allows to read from user using form in HTML
mongoose.connect(process.env.DATABASE_URL , {useNewUrlParser: true , useUnifiedTopology: true});
app.use(router);
app.listen(PORT , () => console.log('express started!'));
