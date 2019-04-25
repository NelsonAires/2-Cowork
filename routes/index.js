const express = require('express');
const router = express.Router();
const Cowork = require('../models/Cowork')
const checkConnected = require('../middlewares').checkConnected
const nodemailer = require('nodemailer');
const User = require("../models/User");
const uploadCloud = require('../config/cloudinary.js');


/* GET home page */
router.get('/', (req, res, next) => {
  Cowork.find()
    .then(coworks => {
      // console.log(Cowork[0].address[0].street)
      res.render('index', {
        coworks
      });
    });
});

router.get('/add-space', checkConnected, (req, res, next) => {
  res.render('add-space');
});

router.post('/add-space', checkConnected, uploadCloud.single('photo'), (req, res, next) => {
  console.log('req.body', req.body)
  Cowork.create({
    images: req.file.url,
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    website: req.body.website,
    description: req.body.description,
    prices: req.body.prices,
    opening_hours : {
      week_day: req.body.week_day,
      weekend: req.body.weekend,
    },
    _owner: req.user._id
  })
  .then(() => {
    console.log("Cowork created, you are going to be redirected")
    res.redirect('my-space')
  })
  // TODO: continue
  // Create a Cowork
  // when it's done, redirect to the detail page
});




/* router.get('/', function(req, res, next) {
  Picture.find((err, pictures) => {
    res.render('index', {pictures})
  })
}); */

router.get('/all-coworks', (req, res, next) => {
  console.log("user:", req.user)
  Cowork.find()
    .then(coworks => {
      // console.log(Cowork[0].address[0].street)
      res.render('all-coworks', {
        coworks
      });
    })
});

router.get('/cowork-detail/:coworkId', (req, res, next) => {
  Cowork.findById(req.params.coworkId)
    .then(cowork => {
      res.render('cowork-detail', {
        cowork
      });
    })
});



// ----------------send the email--------- TODO



// router.post('/cowork-detail/:coworkId/reserve', (req, res, next) => {
//   // TODO: send an email
//   console.log("req.body", req.body)
  // router.get('/cowork-detail/:coworkId', (req, res, next) => {
  //   Cowork.findById(req.params.coworkId)
  //     .then(() => {
//         // send the email
//           let transporter = nodemailer.createTransport({
//             service: 'Gmail',
//             auth: {
//               user: process.env.GMAIL_USER,
//               pass: process.env.GMAIL_PASS
//             },
//             tls: {
//               rejectUnauthorized: false
//             }
//           });
        
//           transporter.sendMail({
//               from: '"2-CoWork 👻" <2coworkiron@gmail.com>',
//               to: email,
//               subject: 'Email confirmed',
//               text: '',
//               html: `Bla Bla Bla Bla`,
//             })
        
//             // When it s done, you can redirect to /cowork-detail/:coworkId/reserved
//             .then(() => {
              // res.redirect('/cowork-detail/:coworkId/reserved')
//             })
//       })
//   });
// });

router.get('/cowork-detail/:coworkId/reserved', (req, res, next) => {
  res.render('reserved');
});

router.post('/cowork-detail', checkConnected, (req, res, next) => {
  res.redirect('/reserved');
});


router.get('/signed-up', (req, res, next) => {
  res.render('signed-up');
});



router.get('/my-space', (req, res, next) => {
  // TODO: find all the coworks where _owner is the connected user
  Cowork.find({
      _owner: req.user._id
    })
    .then(coworks => {
      // then render 'my-space
      res.render('my-space', {
        coworks
      });
    })


});


module.exports = router;