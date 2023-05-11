const express = require("express")
const router = express.Router();
const bookRouter = require("./book")
const path = require("path")

router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/../templates/home.html"))
  res.render("index", { name: "Danny" })
})

router.use(bookRouter)

router.all("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../templates/404.html"))
})

module.exports = router;
