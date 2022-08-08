const { userModel } = require("../models/userSchema");
const {tokenValidator} = require("./token");

module.exports.admin = async (req, res, next) => {
    try {
        const {jwt} = req.cookies;
        const valid = await tokenValidator(jwt);
        if(valid) {
            const phone_no = await valid.phone_no;
            const findUser = await userModel.findOne({phone_no: phone_no});
            const checkRole = await findUser.role;
            if(checkRole === "admin"){
                next();
            } else {
                res.send("Admin only");
            }
        } else {
            res.send("Access Denied");
        }
    } catch (error) {
        res.send(error);
    }
};

module.exports.customer = async (req, res, next) => {
    try {
        const {jwt} = req.cookies;
        const valid = await tokenValidator(jwt);
        if(valid) {
            const phone_no = await valid.phone_no;
            const findUser = await userModel.findOne({phone_no: phone_no});
            const checkRole = await findUser.role;
            if(checkRole === "customer"){
                next();
            } else {
                res.send("Customer only");
            }
        } else {
            res.send("Access Denied");
        }
    } catch (error) {
        res.send(error);
    }
};