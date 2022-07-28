const mongoose = require('mongoose');

const userCollection = "user"; // collection name is users(user pluralized)

const userSchema = new mongoose.Schema({
    full_name: {
        type: 'string',
        required: true,
    },
    email: {
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
    created_date: {
        type: 'string',
    },
    updated_date: {
        type: 'string',
    },
    isDeleted: {
        type: 'boolean',
    },
})


module.exports.userModel = mongoose.model(userCollection, userSchema);