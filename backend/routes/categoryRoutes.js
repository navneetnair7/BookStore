const express = require('express');
const Router = express.Router();
// const Category = require('../models/Category')
const categoryController = require('../controllers/categoryController')

Router.get('/', categoryController.getAllCategories);
// Router.post('/', bookController.addBook);
// Router.get('/:id', bookController.getById);
// Router.put('/:id', bookController.updateBook);
// Router.delete('/:id', bookController.deleteBook);

module.exports = Router;