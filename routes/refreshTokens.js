const express = require("express");
const router = express.Router();
const refreshTokensHandler = require("./handler/refresh-tokens");

/* GET refresh_tokens listing. */
router.post("/", refreshTokensHandler.create);
router.get("/", refreshTokensHandler.getToken);

module.exports = router;
