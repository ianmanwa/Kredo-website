const express = require("express")
const router = express.Router()
const {trader} = require("../Controllers/traderController")
const { signUp , login } = require("../Controllers/signUpController")

router.get("/", trader)
router.post("/signUp", signUp)
router.post("/login", login)

module.exports = router