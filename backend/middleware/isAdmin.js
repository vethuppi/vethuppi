module.exports.isAdmin = (req, res, next) => {
    if(req.user) {
        
        next();
    } else {
        // return unauthorized user
        res.send (401, 'Unauthorized');
    }
};