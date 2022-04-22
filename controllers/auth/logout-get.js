
// Logout section
module.exports = function (req, res, next) {
  return res
    .clearCookie("access_token")
    .status(200)
    .redirect("/")
    .json({ message: "Successfully logged out" });
};
