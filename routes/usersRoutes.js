const express = require("express");

const {
	userDeleteCtrl,
	userUpdateCtrl,
	userProfileCtrl,
	userRegisterCtrl,
	userLoginCtrl,
} = require("../controllers/usersctrl");

const usersRouter = express.Router();

usersRouter.post("/login", userLoginCtrl);

usersRouter.post("/register", userRegisterCtrl);

usersRouter.get("/profile/:id", userProfileCtrl);

usersRouter.put("/update/:id", userUpdateCtrl);

usersRouter.delete("/delete/:id", userDeleteCtrl);

module.exports = usersRouter;
