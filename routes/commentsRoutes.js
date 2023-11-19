const express = require("express");

const {
	commentCreateCtrl,
	commentAllCtrl,
	commentDeleteCtrl,
	commentSingleCtrl,
	commentUpdateCtrl,
} = require("../controllers/commentsctrl");

const commentsRouter = express.Router();

commentsRouter.post("/create", commentCreateCtrl);

commentsRouter.get("/all", commentAllCtrl);

commentsRouter.get("/single/:id", commentSingleCtrl);

commentsRouter.put("/update/:id", commentUpdateCtrl);

commentsRouter.delete("/delete/:id", commentDeleteCtrl);

module.exports = commentsRouter;
