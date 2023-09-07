const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');
const ejs = require('ejs');
// require('dotenv').config();
const Message = require('./models/msg')
const app = express()

mongoose.connect('mongodb://0.0.0.0:27017/kharisprotech',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error',() => console.log("Error in Connecting to Database"));
db.once('open',() => console.log("Connected to Database"))

const templatePath = path.join(__dirname, './views');
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', templatePath);
app.use(express.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

//  Route
app.get('/', (req, res) => {
    res.render('index');
  });
  
  // FAQ Route
  app.get('/about', (req, res) => {
    res.render('about');
  });
  
  // Features Route
  app.get('/features', (req, res) => {
    res.render('features');
  });
  
  // Contact Route
  app.get('/contact', (req, res) => {
    res.render('contact');
  });
  
  // Detail Route
  app.get('/details', (req, res) => {
    res.render('details');
  });

 // Testimonials Route
 app.get('/testimonial', (req, res) => {
    res.render('testimonial');
  });

  // Resume Route
 app.get('/resume', (req, res) => {
  res.render('resume');
});



app.post("/", (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const msg = req.body.msg;

    const data = {
        "name": name,
        "email" : email,
        "phone": phone,
        "msg": msg,
    }

    db.collection('enquiriesMsg').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
      } 
        console.log("Message sent Successfully");

    });
    return res.redirect('/')
})


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

