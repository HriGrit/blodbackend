const express = require("express");

const {
	postAllCtrl,
	postCreateCtrl,
	postDeleteCtrl,
	postSingleCtrl,
	postUpdateCtrl,
} = require("../controllers/postsctrl");
const isLogIn = require("../middleware/isLogIn");
const postsRouter = express.Router();

postsRouter.post("/create", isLogIn, postCreateCtrl);

postsRouter.get("/", isLogIn, postAllCtrl);

postsRouter.get("/:id", postSingleCtrl);

postsRouter.put("/:id", isLogIn, postUpdateCtrl);

postsRouter.delete("/:id", isLogIn, postDeleteCtrl);

module.exports = postsRouter;
