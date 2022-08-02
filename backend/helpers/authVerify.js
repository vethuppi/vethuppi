const {tokenValidator} = require("./token");

module.exports = async function(req, res, next) {
    try {
        const {jwt} = req.cookies;
        const valid = await tokenValidator(jwt);
        const checkRole = await tokenValidator(jwt).role;
        if(valid) {
            if(checkRole === "admin"){
                next();
            } else {
                res.send("admin only");
            }
        } else {
            res.send("Access Denied");
        }
    } catch (error) {
        res.send(error);
    }
}