const mongoose = require('mongoose');

const userCollection = "user"; // collection name is users(user pluralized)

const userSchema = new mongoose.Schema({
    full_name: {
        type: 'string',
        required: true,
    },
    phone_no: {
        type: 'string',
        required: true,
        unique: true,
    },
    address: {
        type: 'string',
        required: true,
    },
    password: {
        type: 'string',
        required: true,
        min: 8,
    },
    role: {
        type: 'string',
    },
    created_datetime: {
        type: 'string',
    },
    updated_datetime: {
        type: 'string',
    },
    isDeleted: {
        type: 'boolean',
    },
})


module.exports.userModel = mongoose.model(userCollection, userSchema);