const express = require("express");
const authRoutes = express.Router();

const passport = require("passport");
const bcrypt = require("bcryptjs");

// require the user model !!!!
const User = require("../models/User");

authRoutes.post("/signup", (req, res, next) => {
  console.log(req.body, "_+_+_+_+_+_+_++_+ ", process.env.MONGODB_URI);
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    res.status(400).json({ message: "Provide username and password" });
    return;
  }

  if (password.length < 7) {
    res.status(400).json({
      message:
        "Please make your password at least 8 characters long for security purposes."
    });
    return;
  }

  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "Username check went bad." });
      return;
    }

    if (foundUser) {
      res.status(400).json({ message: "Username taken. Choose another one." });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewUser = new User({
      username: username,
      password: hashPass
    });

    aNewUser.save(err => {
      if (err) {
        res
          .status(400)
          .json({ message: "Saving user to database went wrong." });
        return;
      }

      // Automatically log in user after sign up
      // .login() here is actually predefined passport method
      req.login(aNewUser, err => {
        if (err) {
          res.status(500).json({ message: "Login after signup went bad." });
          return;
        }

        // Send the user's information to the frontend
        // We can use also: res.status(200).json(req.user);
        console.log("Successfully signed up  ==================", aNewUser);
        res.status(200).json(aNewUser);
      });
    });
  });
});

authRoutes.post("/login", (req, res, next) => {
  // console.log("Attempting to log in user -------------- ", req.user);
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }

    if (!theUser) {
      // "failureDetails" contains the error messages
      // from our logic in "LocalStrategy" { message: '...' }.
      res.status(401).json(failureDetails);
      return;
    }

    User.findById(theUser._id)
      .populate("todoList")
      .then(theUserWithTodo => {
        console.log(
          "the user --- ",
          theUser,
          "the req user also ############## ",
          req.user
        );
        console.log("the Error >>>>>> ", err);
        console.log("error details ======== ", failureDetails);

        // save user in session
        req.login(theUser, err => {
          if (err) {
            res.status(500).json({ message: "Session save went bad." });
            return;
          }
          console.log(
            "Attempting to log in user -------------- ",
            req.session.passport.user
          );
          // We are now logged in (that's why we can also send req.user)
          console.log(
            "this is the user before req user ===================== ",
            theUser
          );
          console.log("the user info with req >>>>>>>>>>>>>> ", req.user);
          res.status(200).json(theUserWithTodo);
        });
      })
      .catch(err => res.status(500).json(err));
  })(req, res, next);
});

authRoutes.post("/logout", (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

authRoutes.get("/loggedin", (req, res, next) => {
  console.log("innnnnnn logged in???????????????????????????/", req.session);
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    // res.session.user = req.user;
    User.findById(req.user._id)
      .populate("todoList")
      .then(theUserWithTodo => {
        res.status(200).json(theUserWithTodo);
        return;
      })
      .catch(err => res.status(500).json(err));
  }
  res.status(403).json({ message: "Unauthorized" });
});

module.exports = authRoutes;
