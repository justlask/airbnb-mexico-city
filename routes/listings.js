const express = require('express');
const router  = express.Router();
const listingsAndReviews = require('../models/reviewsAndListings')



router.get("/listings", (req,res,next) => {
  listingsAndReviews.find().limit(5).then(data => {
    console.log('return the data ',data)
    res.render('listings', {data})
  }).catch(err => next(err))
})



module.exports = router;