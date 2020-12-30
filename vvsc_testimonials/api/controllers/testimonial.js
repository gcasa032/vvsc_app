const express = require('express');
const router = express.Router();
const Testimoial = require('../models/Testimonial');


module.exports = {

    getAll: async(req, res) => {

        const testimonials = await Testimoial.find()
        console.log('Getting a list of all testimonials')
        res.send(testimonials)
    },

    getOne: async(req, res) => {

        const testimonials = await Testimoial.find({ idtestimonials: parseInt(req.params.id) }).exec()
        console.log(`Getting testimonial with id: ${req.params.id}`)
        res.send(testimonials)

    }

}