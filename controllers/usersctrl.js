const User = require("../models/userSchema");

const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const userLoginCtrl = async (req, res) => {
	const { email, password } = req.body;

	const userfound = await User.findOne({ email: email });

	if (!userfound) {
		return res.json({ msg: "FAILED", status: 501 });
	}

	const passwordMatch = await bcrypt.compareSync(
		password,
		userfound.password
	);

	if (!passwordMatch) {
		return res.json({ msg: "FAILED", status: 502 });
	}

	return res.json({
		msg: "SUCCESS",
		status: 200,
		user: userfound,
		token: generateToken(userfound),
	});
};

function isAlphaNumeric(password) {
	const alphanumericRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])/;

	return alphanumericRegex.test(password);
}

const userRegisterCtrl = async (req, res) => {
	const { name, email, password, age, preference } = req.body;

	if (password.length < 8) {
		return res.json({
			msg: "Password must be at least 6 characters",
			status: 402,
		});
	}
	if (!isAlphaNumeric(password)) {
		return res.json({
			msg: "Password must contain at least one letter and one number",
			status: 403,
		});
	}

	const userfound = await User.findOne({ email: email });
	if (userfound) {
		console.log("User already exists");
		return res.json({ msg: "FAILED", status: 401 });
	}

	const salt = await bcrypt.genSaltSync(10);
	const hashedPassword = await bcrypt.hashSync(password, salt);

	try {
		const newUser = new User({
			username: name,
			email,
			password: hashedPassword,
			age,
			preference,
		});
		await newUser.save();
		return res.json({
			msg: "User Registered Successfully",
			status: 200,
			user: newUser,
			token: generateToken(newUser),
		});
	} catch (error) {
		res.json({ msg: "FAILED", status: 400, error });
	}
};

const userProfileCtrl = async (req, res) => {};

const userUpdateCtrl = async (req, res) => {};

const userDeleteCtrl = async (req, res) => {};

module.exports = {
	userLoginCtrl,
	userRegisterCtrl,
	userProfileCtrl,
	userUpdateCtrl,
	userDeleteCtrl,
};
