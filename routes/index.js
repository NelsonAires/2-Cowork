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

router.get('/cowork-detail/:coworkId', (req, res, next) => {
  Coworks.findById(req.params.coworkId)
  .then(cowork => {
    res.render('cowork-detail', {cowork});
  })
}); 


/* Book detail page without editor
router.get('/books/:bookId', (req,res,next) => {
console.log("The id is", req.params.bookId)
Book.findById(req.params.bookId)
.then(bookFromDb => {
res.render('book-detail', {
book: bookFromDb
})
})
}) */

router.get('/signed-up', (req, res, next) => {
  res.render('signed-up');
}); 










module.exports = router;
