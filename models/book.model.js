const { Schema, models, model } = require('mongoose');

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        author: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    },
);

const Book = models.Book || model('Book', bookSchema);
module.exports = Book;
