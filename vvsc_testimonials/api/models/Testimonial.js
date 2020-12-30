// Mongoose models to create and read documents from the database
// https://mongoosejs.com/docs/index.html
// https://mongoosejs.com/docs/models.html

const mongoose = require('mongoose');

// Create schema for Testimonial document
const schema = mongoose.Schema({
    idtestimonial: Number,
    name: String,
    testimonial: String,
    pic_path: String,
});

module.exports = mongoose.model("Testimonial", schema);