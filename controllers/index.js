const { parallel } = require("async");

const Book = require("../models/Book");
const BookInstance = require("../models/BookInstance");
const Author = require("../models/Author");
const Genre = require("../models/Genre");

module.exports = function (req, res, next) {
  const library_overview = [
    {
      Books: "book_count",
      Copies: "book_instance_count",
      Availables: "book_instance_available_count",
      Authors: "author_count",
      Genres: "genre_count",
    },
  ];

  parallel(
    {
      book_count: function (callback) {
        Book.countDocuments({}, callback);
      },
      book_instance_count: function (callback) {
        BookInstance.countDocuments({}, callback);
      },
      book_instance_available_count: function (callback) {
        BookInstance.countDocuments({ status: "Available" }, callback);
      },
      author_count: function (callback) {
        Author.countDocuments({}, callback);
      },
      genre_count: function (callback) {
        Genre.countDocuments({}, callback);
      },
      latest_books: function (callback) {
        Book.find({}, callback)
          .populate("author")
          .populate("genre")
          .limit(3)
          .sort({ created_at: -1 });
      },
    },
    function (err, results) {
      res.render("index", {
        title: "Local Library Home",
        error: err,
        data: results,
        library_overview: library_overview[0],
      });
    }
  );
};
