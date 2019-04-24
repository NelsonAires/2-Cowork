const express = require('express');
const router  = express.Router();
const Cowork = require('../models/Cowork')
// const Picture = require('../models/picture'); 

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/add-space', (req, res, next) => {
  res.render('add-space');
});

/* router.get('/', function(req, res, next) {
  Picture.find((err, pictures) => {
    res.render('index', {pictures})
  })
}); */

router.get('/all-coworks', (req, res, next) => {
  console.log("loooooool", req.user)
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



module.exports = router;
