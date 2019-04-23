const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/add-space', (req, res, next) => {
  res.render('add-space');
});

router.get('/all-coworks', (req, res, next) => {
  res.render('all-coworks');
});

router.get('/see-detail', (req, res, next) => {
  res.render('see-detail');
<<<<<<< HEAD
});
=======
}); 

router.get('/signed-up', (req, res, next) => {
  res.render('signed-up');
}); 




>>>>>>> 285b47317399ffbac74f652339c51dbfe493d521





module.exports = router;
