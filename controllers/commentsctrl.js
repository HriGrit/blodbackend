const commentCreateCtrl = async (req, res) => {
	console.log("here");
	res.json({ message: "Comment Create" });
};

const commentAllCtrl = async (req, res) => {};

const commentSingleCtrl = async (req, res) => {};

const commentUpdateCtrl = async (req, res) => {};

const commentDeleteCtrl = async (req, res) => {};

module.exports = {
	commentCreateCtrl,
	commentAllCtrl,
	commentSingleCtrl,
	commentUpdateCtrl,
	commentDeleteCtrl,
};
