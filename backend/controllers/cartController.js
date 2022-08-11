// builtin modules
const {tokenValidator} = require("../middleware/token");

// Models
const User = require("../models/userSchema");
const Product = require("../models/productSchema");
const Cart = require("../models/cartSchema");

// new cart route
exports.newCart = async (req, res) => {
    try {

        const {jwt} = req.cookies;
        const valid = await tokenValidator(jwt);
        const phone_no = await valid.phone_no;
        const findUser = await User.userModel.findOne({phone_no: phone_no});
        const user_id = findUser._id;

        const cart = await Cart.cartModel.findOne({ user_id });
        const { product_id, quantity } = req.body;
    
        if (cart) {
          //cart exists for user
          const itemIndex = cart.products.findIndex(p => p.product_id == product_id);
    
          if (itemIndex > -1) {
            //product exists in the cart, update the quantity
            const productItem = cart.products[itemIndex];
            productItem.quantity = quantity;
            cart.products[itemIndex] = productItem;
          } else {
            //product does not exists in cart, add new item
            cart.products.push({ product_id, quantity });
          }
          cart = await cart.save();
          return res.status(201).send(cart);
        } else {
          //no cart for user, create new cart
          const newCart = await Cart.cartModel.create({
            user_id,
            products: [{ product_id, quantity }]
          });
    
          return res.status(201).send(newCart);
        }
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
};

