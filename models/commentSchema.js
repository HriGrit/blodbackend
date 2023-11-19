const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
	postId: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post",
			required: true,
		},
	],
	comment: {
		type: String,
		required: [true, "Comment is required"],
	},
	time: {
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
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
