const express = require('express');
const router  = express.Router();
const listingsAndReviews = require('../models/reviewsAndListings')



router.get("/listings", (req,res,next) => {
  listingsAndReviews.find({}).then(data => {
    console.log(data)
    res.render('listings', {data: data})
  }).catch(err => next(err))
})



module.exports = router;