const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");

const usersRouter = require("./routes/usersRoutes");
const commentsRouter = require("./routes/commentsRoutes");
const postsRouter = require("./routes/postsRoutes");

const app = express();

app.use(express.json());
app.use(cors());

dbConnect();

app.use("/api/v1/comments/", commentsRouter);
app.use("/api/v1/posts/", postsRouter);
app.use("/api/v1/users/", usersRouter);

app.listen(process.env.PORT, () => {
	console.log("Server is running on port 1313");
});
