const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name : {
        type: String
    },
    description : {
        type: String,
    },
    price : {
        type: Number,
    },
});

module.exports = mongoose.model('food', foodSchema);