const express = require('express');
const wrap = require('../../common/errors/async-error-wrapper');
const Rating = require('./rating.schema');

const router = express.Router();

router.post(
  '/:id',
  wrap(async (req, res) => {
    console.log('!');
    const rating = new Rating({
      placeId: req.body.placeId,
      userId: req.body.userId,
      rating: req.body.rating,
    });
    try {
      await rating.save();
      res.status(201);
    } catch (error) {
      console.log(error.message);
    }
  }),
);

module.exports = router;
