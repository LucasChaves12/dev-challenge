const { Router } = require("express");

const movieRouter = require("./controllers/Movies");
const showsRouter = require("./controllers/Shows");
const authRouter = require("./controllers/Auth");

const router = Router();

router.use("/movies", movieRouter);
router.use("/shows", showsRouter);
router.use("/auth", authRouter);

module.exports = router;
