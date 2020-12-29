const express = require("express");
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

mongoose
    .connect('mongodb://localhost/vvsc', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        const app = express();

        //Initialize Middleware 
        app.use(express.json());

        //Set routes
        app.use('/api', require('./api/routes/testimonials'));

        // Listen to port
        app.listen(port, function() {
            console.log('Server started on port: ' + port);
        });
    });