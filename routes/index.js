const express = require('express');
const router  = express.Router();
const Coworks = require('../models/Coworks')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/add-space', (req, res, next) => {
  res.render('add-space');
});

router.get('/all-coworks', (req, res, next) => {
  Coworks.find()
    .then( coworks => {
      // console.log(Coworks[0].address[0].street)
      res.render('all-coworks', {coworks});
    })
});

router.get('/see-detail', (req, res, next) => {
  res.render('see-detail');
}); 

router.get('/signed-up', (req, res, next) => {
  res.render('signed-up');
}); 










module.exports = router;
