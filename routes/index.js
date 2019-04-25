const express = require('express');
const router  = express.Router();
const Cowork = require('../models/Cowork')
const checkConnected = require('../middlewares').checkConnected

/* GET home page */
router.get('/', (req, res, next) => {
  Cowork.find()
    .then( coworks => {
      // console.log(Cowork[0].address[0].street)
      res.render('index', {coworks});
    });
});

router.get('/add-space', checkConnected, (req, res, next) => {
  res.render('add-space');
});

router.post('/add-space', checkConnected, (req, res, next) => {
  console.log('req.body', req.body)
  Cowork.create({
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    website: req.body.website,
    description: req.body.description,
    prices: req.body.prices,
    opening_hours : {
    week_day: req.body.week_day,
    weekend: req.body.weekend
    },
    _owner: req.user._id
  })
  .then(() => {
    console.log("Cowork created, you are going to be redirected")
    res.redirect('all-coworks')
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
    .then( coworks => {
      // console.log(Cowork[0].address[0].street)
      res.render('all-coworks', {coworks});
    })
});

router.get('/cowork-detail/:coworkId', (req, res, next) => {
  Cowork.findById(req.params.coworkId)
  .then(cowork => {
    res.render('cowork-detail', {cowork});
  })
}); 


router.get('/signed-up', (req, res, next) => {
  res.render('signed-up');
}); 

router.get('/my-space', (req, res, next) => {
  // TODO: find all the coworks where _owner is the connected user
  // then renser 'my-space
  res.render('my-space');
}); 


module.exports = router;
