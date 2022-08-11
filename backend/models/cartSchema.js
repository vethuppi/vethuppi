const mongoose = require("mongoose");

const cartCollection = "cart"; // collection name is cart(cart pluralized)

const CartSchema = new mongoose.Schema({
    user_id: {
      type: 'string',
    },
    products: [
      {
        product_id: {
            type: 'string'
        },
        quantity: {
            type: 'number'
        },
      }
    ],
})

module.exports.cartModel = mongoose.model(cartCollection, CartSchema);