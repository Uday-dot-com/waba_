
// 1
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

// 2
const bookSchema = new Schema({
  book_name: String,
  Book_author: String,
  price: String,
 comment:       String,
}, {

  // 3
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

// 4
const Book = mongoose.model('book', bookSchema)
module.exports = Book