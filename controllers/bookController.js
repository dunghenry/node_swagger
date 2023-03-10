const Book = require('../models/book.model');
class bookController {
    static async createBook(req, res) {
        const { title, author } = req.body;
        try {
            const findBook = await Book.findOne({ title });
            if (findBook) {
                return res.status(400).json({
                    message: 'Book already exists',
                });
            }
            const newBook = new Book({
                title,
                author,
            });
            const savedBook = await newBook.save();
            return res.status(200).json(savedBook._doc);
        } catch (error) {
            return res.status(500).json({
                message: error?.message,
            });
        }
    }
    static async getAllBooks(req, res) {
        try {
            const books = await Book.find();
            return res.status(200).json(books);
        } catch (error) {
            return res.status(500).json({
                message: error?.message,
            });
        }
    }
    static async getBook(req, res) {
        const { id } = req.params;
        try {
            const findBook = await Book.findById(id);
            if (!findBook) {
                return res.status(404).json({
                    message: 'Book not found',
                });
            }
            return res.status(200).json(findBook._doc);
        } catch (error) {
            return res.status(500).json({
                message: error?.message,
            });
        }
    }
    static async updateBook(req, res) {
        try {
        } catch (error) {
            return res.status(500).json({
                message: error?.message,
            });
        }
    }
    static async deleteBook(req, res) {
        try {
        } catch (error) {
            return res.status(500).json({
                message: error?.message,
            });
        }
    }
}

module.exports = bookController;
