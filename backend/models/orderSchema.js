const mongoose = require('mongoose');

const orderCollection = "order"; // collection name is order(order pluralized)

const orderSchema = new mongoose.Schema({
    user_id: {
        type: 'string',
    },
    product_id: {
        type: 'string',
    },
    quantity: {
        type: 'integer',
    },
    delivery_datetime: {
        type: 'string',
    },
    delivery_address: {
        type: 'string',
    },
    datetime: {
        type: 'string',
    },
    status: { // pending, active, inactive
        type: 'string',
    },
    delivery_status: { // pending, delivered
        type: 'boolean',
    },
})


module.exports.orderModel = mongoose.model(orderCollection, orderSchema);