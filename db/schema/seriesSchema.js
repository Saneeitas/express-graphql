const mongoose = require('mongoose');

 const seriesSchema = new mongoose.Schema({
    seriesName: {
        type: String
    },
    year: {
        type: Number
    },
    rating: {
        type: String
    }
});

module.exports = {seriesSchema}