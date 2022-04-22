const User = require("../../models/User")
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Signup section
module.exports = [
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
    async (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.render("signup", {
          title: "Signup",
          errors: errors.array(),
        });
      }
      const { username, password } = req.body;
      try {
        let user = await User.findOne({
          username,
        });
        if (user) {
          return res.status(200).json({
            msg: "User already axists, choose another username!",
          });
        }
        user = new User({
          username,
          password,
        });
  
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
  
        await user.save();
  
        const payload = {
          user: {
            id: user.id,
          },
        };
        jwt.sign(
          payload,
          "randomString",
          {
            expiresIn: 10000,
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