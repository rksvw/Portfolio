const { Router } = require("express");
const router = Router();
const { getTest } = require("../controllers/user.controller");

router.get("/test", getTest);

module.exports = router;
