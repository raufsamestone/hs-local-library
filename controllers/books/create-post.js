const Book = require("../../models/Book");

const defaultImageURL =
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";


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
