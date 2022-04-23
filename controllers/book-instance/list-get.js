const BookInstance = require("../../models/BookInstance");

// Display list of all BookInstances.
module.exports = function (req, res, next) {
  
  //Parameter query filter
  const queryParamBookInstance = req.query.status;
  const filterQuery = [];
  if (queryParamBookInstance) {
    filterQuery.push({ status: queryParamBookInstance });
  } else filterQuery.push({});
  const filterQuery0 = filterQuery[0];

  BookInstance.find(filterQuery0)
    .populate("book")
    .exec(function (err, list_bookinstances) {
      if (err) {
        return next(err);
      }
      // Successful, so render.
      res.render("bookinstance_list", {
        title: "Book Instance List",
        bookinstance_list: list_bookinstances,
      });
    });
};
