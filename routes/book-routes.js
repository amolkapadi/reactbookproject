const express=require('express');
const Book = require('../model/Book');
const router =express.Router();
// const Product =require('../model/Book');
const booksController =require("../controllers/books-controller")

//get all books/
router.get('/', booksController.getAllBooks)
//Add (post) book
router.post("/",booksController.addBook)
//get single book by id
 router.get("/:id",booksController.getById)
//put update book
router.put("/:id",booksController.updateBook)
//delete book
router.delete("/:id",booksController.deleteBook)


module.exports =router;