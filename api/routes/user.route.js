const { Router } = require("express");
const router = Router();
const { getTest, getUser } = require("../controllers/user.controller");

router.get("/test", getTest);
router.get("/users", getUser);

module.exports = router;
