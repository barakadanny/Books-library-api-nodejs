const {Schema, default: mongoose} = require('mongoose')
const bookRouter = require('../routes/book')

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
})

// initialy mongoes provide collection to be on plural 'books'
// but in our case we are using book, thats why I provide the third argument
// 'book'
module.exports = mongoose.model('Book', BookSchema, 'book')