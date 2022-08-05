const mongoose = require('mongoose');

const productCollection = "product"; // collection name is users(user pluralized)

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

module.exports.productModel = mongoose.model(productCollection, productSchema);