const mongoose = require('mongoose');

const userCollection = "user"; // collection name is users(user pluralized)
// const counterCollection = "counter"; // collection name is counter(counter pluralized)

const userSchema = new mongoose.Schema({
    full_name: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
    },
    phone_no: {
        type: 'string',
        required: true,
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
    status: {
        type: 'boolean',
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
})

// Schma for Sequence
// const userCounterSchema = {
//     id: {
//         type: 'string',
//     },
//     user_seq: {
//         type: 'number',
//     },
// };


module.exports.userModel = mongoose.model(userCollection, userSchema);
// module.exports.userCounterModel = mongoose.model(counterCollection, userCounterSchema);