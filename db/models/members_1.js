const mongoose = require('mongoose');

var Member1 = mongoose.model('member1', {
    name: {
        type: String,
        trim: false,
        required: true,
        maxlength: 15
    },
    rank: {
        type: String,
        trim: false,
        required: true,
        maxlength: 30
    },
    quote: {
        type: String,
        trim: false,
        required: true,
        maxlength: 200 
    },
    isMajor: {
        type: String,
        required: true
    },
    career: {
        type: String,
        trim: false,
        required: true,
        maxlength: 30
    },
    picture: {
        type: String,
        trim: true,
        required: false
    }
});

module.exports = {Member1};