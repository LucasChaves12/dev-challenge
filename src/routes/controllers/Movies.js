const express = require("express");
const getMovies = require("./services/getMovies");
const postMovie = require("./services/postMovie");
const router = express.Router();

router.get("/", getMovies);
router.post("/", postMovie);

module.exports = router;
