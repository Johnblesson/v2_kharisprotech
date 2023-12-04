const { Router } = require('express');
const router = Router();

const { createMessage, getAllContactForms } = require('../controllers/controller.js');


// Create a new contact form
router.post('/createContact', createMessage);

// Get all contact forms
router.get('/getContacts', getAllContactForms);

// Home Route
router.get('/', (req, res) => {
    res.render('index');
  });
  
  // FAQ Route
  router.get('/about', (req, res) => {
    res.render('about');
  });
  
  // Features Route
  router.get('/features', (req, res) => {
    res.render('features');
  });
  
  // Contact Route
  router.get('/contact', (req, res) => {
    res.render('contact');
  });
  
  // Detail Route
  router.get('/details', (req, res) => {
    res.render('details');
  });

 // Testimonials Route
 router.get('/testimonial', (req, res) => {
    res.render('testimonial');
  });

  // Resume Route
 router.get('/resume', (req, res) => {
  res.render('resume');
});

// Export the router
module.exports = router;