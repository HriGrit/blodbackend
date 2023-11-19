const User = require("../models/userSchema");
const verifyToken = require("../utils/verifyToken");

const isLogIn = async (req, res, next) => {
	const token = localStorage.getItem("token");
	const result = verifyToken(token);
	const userid = result.id;

	if (!userid) {
		return console.log("No Token");
	}
	const user = await User.findById(userid);

	if (!user) {
		return console.log("Invalid User");
	} else {
		req.user = userid;
		next();
	}
};

module.exports = isLogIn;
