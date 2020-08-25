const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const model = mongoose.model;

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

module.exports = model('food', foodSchema);