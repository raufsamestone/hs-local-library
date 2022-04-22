const Book = require("../../models/Book");

const defaultImageURL =
  "https://www.spl.org/Seattle-Public-Library/images/books-media/default-list-icons/default-book-icon.png";

module.exports = function (req, res, next) {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
    isbn: req.body.isbn,
    genre: req.body.genre,
    image: req.body.image || defaultImageURL,
    createad_at: Date.now(),
  });

  book.save(function (err) {
    if (err) return next(err);
    res.redirect(book.url);
  });
};
