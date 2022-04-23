const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.cookies.access_token;
  if (!token) return res
  .status(200)
  .redirect("/auth/login");
  try {
    const decoded = jwt.verify(token, "randomString");
    req.user = decoded.user;
    next();
  } catch (e) {
    console.error(e);
    res.redirect("/auth/login");
  }
};
