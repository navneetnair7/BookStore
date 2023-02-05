const Book = require('../models/Book');

const getAll = async (req ,res, next) => {
    let books;
    try {
        books = await Book.find()
    }
    catch(err) {
        console.log(err);
    }
    if(!books) {
        return res.status(404).json({ message : "No products found" })
    }
    return res.status(200).json({ books })
}

const addBook = async (req ,res, next) => {
    let books;
    try {
        book = new Book({
            name: req.body.name,
            author: req.body.author,
            description: req.body.description,
            price: req.body.price,
            available: req.body.available,
            image: req.body.image
        })
        await book.save();
    }
    catch(err) {
        console.log(err);
    }
    if(!book) {
        return res.status(500).json({ message: "Can't add that shit"})
    }
    else {
        return res.status(201).json({ book });
    }
}

const getById = async (req, res, next) => {
    let book;
    const id = req.params.id;
    try {
        book = await Book.findById(id);
    }
    catch(err) {
        console.log(err);
    }
    if(!book) {
        return res.status(404).json({ message : "No products found" })
    }
    return res.status(200).json({ book })
}

const updateBook = async (req, res, next) => {
    let book;
    const id = req.params.id;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name: req.body.name,
            author: req.body.author,
            description: req.body.description,
            price: req.body.price,
            available: req.body.available,
            image: req.body.image
        })
        book = await book.save();
    }
    catch(err) {
        console.log(err);
    }
    if(!book) {
        return res.status(404).json({ message: "Can't update that shit"})
    }
    else {
        return res.status(200).json({ book });
    }
}

const deleteBook = async (req, res, next) => {
    let book;
    const id = req.params.id;
    try {
        book = await Book.findByIdAndRemove(id)
    }
    catch {
        console.log(err);
    }
    if(!book) {
        return res.status(404).json({ message: "Unable to find that book" });
    }
    else {
        return res.status(200).json({ message: "Succesfully deleted" });
    }
}

exports.getAll = getAll;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;