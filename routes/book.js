const express = require("express")
const bookRouter = express.Router();
const BookController = require("../controllers/BookController")

bookRouter
  .route("/book")
  .get(BookController.index)
  .post(BookController.create);

bookRouter
  .route("/book/:id")
  .get(BookController.show)
  .patch(BookController.update)
  .delete(BookController.delete)

module.exports = bookRouter;