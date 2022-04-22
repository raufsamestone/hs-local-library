const Book = require("../../models/Book");
const Author = require("../../models/Author");
const Genre = require("../../models/Genre");

const { parallel } = require("async");

module.exports = function (req, res, next) {
  const queryParamTextSearch = req.query.filter;
  // const queryParamGenre = req.query.genre // Example of category based filtering params
  parallel(
    {
      authors: function (callback) {
        Author.find(callback);
      },
      genres: function (callback) {
        Genre.find(callback);
      },
    },
    function (err, results) {
      if (queryParamTextSearch) {
        Book.find(
          { $text: { $search: queryParamTextSearch } }, // or { genre: queryParamGenre } 
          function (err, listBooks) {
            if (err) {
              return next(err);
            }
            res.render("book_list", {
              title: "Book List",
              book_list: listBooks,
              authors: results.authors,
              genres: results.genres,
            });
          }
        );
      } else {
        Book.find()
          .sort({ title: 1 })
          .populate("author")
          .exec(function (err, listBooks) {
            if (err) return next(err);
            res.render("book_list", {
              title: "Book List",
              book_list: listBooks,
              authors: results.authors,
              genres: results.genres,
            });
          });
      }
    }
  );
};
