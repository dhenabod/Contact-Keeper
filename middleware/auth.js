const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
    // get token from header
    const token = req.header("x-auth-token");

    // check if token exist
    if (!token) {
        return res.status(401).json({ msg: "No token, autorization denied" });
    }

    // if there is a token then verify

    try {
        const decoded = jwt.verify(token, config.get("jwtSecret"));

        req.user = decoded.user;

        // call next to move on
        next();
    } catch (error) {
        res.status(401).json({ msg: "Token is not valid" });
    }
};
