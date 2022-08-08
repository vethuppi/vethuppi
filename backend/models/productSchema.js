const mongoose = require('mongoose');

const productCollection = "product"; // collection name is users(user pluralized)

const productSchema = new mongoose.Schema({
    title: {
        type: 'string',
    },
    desc: {
        type: 'string',
    },
    img: {
        public_id: {
            type: 'string',
        },
        secure_url: {
            type: 'string',
        }
    },
    price: {
        type: 'string',
    },
    shop: {
        type: 'string',
    },
    publisher: {
        type: 'string',
    },
    status: {
        type: 'boolean',
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