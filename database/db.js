const { default: mongoose } = require('mongoose');

async function connectDB(params) {
  await mongoose.connect('mongodb://localhost:27017/books_management');
}

module.exports = connectDB;
