const express = require('express');
const router = express.Router();
const Testimoial = require('./models/Testimonial');
const TestimonialsController = require('./controllers/testimonial')


//Set routes for API calls to this microservice
router.get('/all', TestimonialsController.getAll);
router.get('/:id', TestimonialsController.getOne);



module.exports = router;