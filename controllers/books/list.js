const Book = require("../../models/Book");
const Author = require("../../models/Author");
const Genre = require("../../models/Genre");

const { parallel } = require("async");

module.exports = function (req, res, next) {
  //Parameter query filter
  const queryParamTextSearch = req.query.filter;
  const queryParamGenre = req.query.genre;
  const queryParamAuthor = req.query.author;
  const filterQuery = [];
  if (queryParamGenre && queryParamAuthor) {
    filterQuery.push({ author: queryParamAuthor, genre: queryParamGenre });
  }

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
          { $text: { $search: queryParamTextSearch } },
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
      }
      if (filterQuery.length > 0) {
        Book.find(filterQuery[0], function (err, listBooks) {
          if (err) {
            return next(err);
          }
          res.render("book_list", {
            title: "Book List",
            book_list: listBooks,
            authors: results.authors,
            genres: results.genres,
          });
        });
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
