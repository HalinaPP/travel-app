const express = require('express');
const wrap = require('../../common/errors/async-error-wrapper');
const Rating = require('./rating.schema');

const router = express.Router();

router.post(
  '/:id',
  wrap(async (req, res) => {
    const rating = new Rating({
      placeId: req.body.placeId,
      userId: req.body.userId,
      rating: req.body.rating,
    });

    await rating.save();
  }),
);
