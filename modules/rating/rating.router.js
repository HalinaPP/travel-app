const express = require('express');
const wrap = require('../../common/errors/async-error-wrapper');
const Rating = require('./rating.schema');
const { InternalServerError } = require('../../common/errors/errors-list');
const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const router = express.Router();

router.post(
  '/:id',
  wrap(async ({ body: { placeId, userId, rating: r } }, res) => {
    const rating = new Rating({
      placeId,
      userId,
      rating: r,
    });
    try {
      await rating.save();
      res.status(StatusCodes.CREATED).send(ReasonPhrases.CREATED);
    } catch (error) {
      throw new InternalServerError();
    }
  }),
);

module.exports = router;
