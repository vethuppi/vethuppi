const mongoose = require('mongoose');

const orderCollection = "order"; // collection name is order(order pluralized)

const orderSchema = new mongoose.Schema({
    user_id: {
        type: 'string',
    },
    products: {
        product_id: {
            type: 'string',
        },
        quantity: {
            type: 'number',
        },
    },
    delivery: {
        delivery_datetime: {
            type: 'string',
        },
        delivery_address: {
            type: 'string',
        },
        delivery_status: { // pending, delivered
            type: 'boolean',
        },
    },
    datetime: {
        type: 'string',
    },
    status: { // pending, active, inactive
        type: 'string',
    },
})


module.exports.orderModel = mongoose.model(orderCollection, orderSchema);