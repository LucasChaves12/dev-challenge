const express = require("express");
const getShows = require("./services/getShows");
const router = express.Router();

router.get("/", getShows);

module.exports = router;
