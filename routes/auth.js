const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const nodemailer = require('nodemailer');

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.get("/login", (req, res, next) => {
  res.render("auth/login", {
    "message": req.flash("error")
  });
});

//On "POST/auth/login", the Passport Local Strategy
router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (email === "" || password === "") {
    res.render("auth/signup", {
      message: "Indicate email and password"
    });
    return;
  }

  User.findOne({
    email
  }, "email", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", {
        message: "The email already exists"
      });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let confirmationCode = '';
    for (let i = 0; i < 25; i++) {
      confirmationCode += characters[Math.floor(Math.random() * characters.length)];
    }

    const newUser = new User({
      email,
      password: hashPass,
      confirmationCode,
      active: false,
    });

    newUser.save()
      .then(() => {
        // async email
        // jwt.sign(
        //   {
        //     user: _.pick(user, 'id'),
        //   },
        //   EMAIL_SECRET,
        //   {
        //     expiresIn: '1d',
        //   },
        //   (err, emailToken) => {
        //     const url = `http://localhost:3000/confirmation/${emailToken}`;

        //     transporter.sendMail({
        //       to: args.email,
        //     });
        //   },
        // );
        let transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
          },
          tls: {
            rejectUnauthorized: false
          }
        });
        let url = "http://localhost:3000/auth/confirmation/" + confirmationCode
        transporter.sendMail({
          from: '"2-CoWork 👻" <2coworkiron@gmail.com>',
          to: email,
          // to: args.email,
          subject: 'Confirm email',
          text: '',
          html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
        })


        // Send the email 
        //   newUser.save()
        // .then(() => {
        //   req.login(newUser, () => {
        res.redirect("/");
        //   });
      })

      .catch(err => {
        res.render("auth/signup", {
          message: "Something went wrong"
        });
      })
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/confirmation/:confirmationCode", (req, res) => {
  // TODO
  // Find the user with the confirmation code and make his status active
  // Render a page with a success/failure confirmation
  User.findOne({
      confirmationCode: req.params.confirmationCode
    })
    .then(user => {
      if (user.active === true) {
        res.redirect('/signed-up')
      } else {
        user.active = true;
        user.save()
          .then(() => {
            res.render("/");
            //sucessful
          })
          .catch(err => {
            res.render('/')
            //failure
          })
      }
    })
});

module.exports = router;