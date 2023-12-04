const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const ejs = require('ejs');
require('dotenv').config();
const app = express()

// DB Connection
require('./database/connect');

const templatePath = path.join(__dirname, './views');
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', templatePath);
app.use(express.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static('public'));


// Routes
const allRoutes = require('./routes/route');
app.use(allRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

