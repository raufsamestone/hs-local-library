
const User = require("../../models/User")
const { check, body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = [
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
    async (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.render("login", {
          title: "Login",
          errors: errors.array(),
        });
      }
      const { username, password } = req.body;
      try {
        let user = await User.findOne({
          username,
        });
        if (!user) {
          return res.status(200).json({
            msg: "User Not Found",
          });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({
            message: "Incorrect Password !",
          });
  
        const payload = {
          user: {
            id: user.id,
          },
        };
        jwt.sign(
          payload,
          "randomString",
          {
            expiresIn: 3600,
          },
          (err, token) => {
            if (err) throw err;
            return res
              .cookie("access_token", token, {
                httpOnly: true,
              })
              .status(200)
              .redirect("/books");
          }
        );
      } catch (err) {
        console.log(err.message);
        // res.status(500).send("Error in Saving");
      }
    },
  ];