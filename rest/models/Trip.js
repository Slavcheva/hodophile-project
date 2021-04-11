const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const {String, Number, Boolean, ObjectId} = Schema.Types;

const tripSchema = new Schema({

    destination: {
        type: String,
        required: true,
    },
    // imageUrl: {
    //     type: String,
    //     required: true,
    // },
    description: {
        type: String,
        required: true,
    },
    //
    // author: {
    //     type: String,
    //     required: true,
    // },

    postId: {
        type: ObjectId,
        ref: "User"
    }

});

module.exports = new Model('Trip', tripSchema);