const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "Password is required"],
	},
	age: {
		type: Number,
		required: [true, "Age is required"],
	},
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Posts",
		},
	],
	dateCreated: {
		type: Date,
		default: Date.now,
	},
	preference: [
		{
			type: String,
			enum: [
				"Music",
				"Movies",
				"Sports",
				"Food",
				"Travel",
				"Politics",
				"Fashion",
				"Technology",
				"Other",
				"All",
				"Gaming",
			],
		},
	],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
