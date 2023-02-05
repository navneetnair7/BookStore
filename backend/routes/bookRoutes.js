const express = require('express');
const Router = express.Router();
const Book = require('../models/Book')
const bookController = require('../controllers/booksController')

Router.get('/', bookController.getAll);
Router.post('/', bookController.addBook);
Router.get('/:id', bookController.getById);
Router.put('/:id', bookController.updateBook);
Router.delete('/:id', bookController.deleteBook);

module.exports = Router;