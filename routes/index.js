const express = require("express")
const router = express.Router();
const bookRouter = require("./book")
const authRouter = require("./auth")
const path = require("path")

router.get("/", (req, res) => {
  res.render("index", { name: "Danny" })
})

router.use(bookRouter)
router.use(authRouter)

router.all("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../templates/404.html"))
})

module.exports = router;
