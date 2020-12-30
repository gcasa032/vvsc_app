const express = require('express');
const router = express.Router();
const Testimoial = require('../models/Testimonial');


//Set routes for API calls to this microservice
router.get('/all', async(req, res) => {
    const testimonials = await Testimoial.find()
    console.log('Getting a list of all testimonials')
    res.send(testimonials)
});
router.get('/:id', async(req, res) => {
    const testimonials = await Testimoial.find({ idtestimonials: parseInt(req.params.id) }).exec()
    console.log(`Getting testimonial with id: ${req.params.id}`)
    res.send(testimonials)
});


module.exports = router;