const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Title is required"],
	},
	description: {
		type: String,
		required: [true, "Description is required"],
	},
	dateCreated: {
		type: Date,
		default: Date.now,
	},
	createdBy: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	],
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment",
		},
	],
	category: {
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
		default: "Other",
		required: true,
	},
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
