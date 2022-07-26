const mongoose = require('mongoose');

const productCollection = "product"; // collection name is users(user pluralized)
// const counterCollection = "counter"; // collection name is counter(counter pluralized)

const productSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true,
        max: 100,
    },
    desc: {
        type: 'string',
        required: true,
        max: 1000,
    },
    img: {
        type: 'string',
        required: true
    },
    price: {
        type: 'string',
        required: true,
    },
    shop: {
        type: 'string',
        required: true,
    },
    publisher: {
        type: 'string',
        required: true,
    },
    status: {
        type: 'boolean',
        required: true,
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

// Schma for Sequence
// const userCounterSchema = {
//     id: {
//         type: 'string',
//     },
//     user_seq: {
//         type: 'number',
//     },
// };


module.exports.productModel = mongoose.model(productCollection, productSchema);
// module.exports.userCounterModel = mongoose.model(counterCollection, userCounterSchema);