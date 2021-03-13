const express = require('express');
const wrap = require('../../common/errors/async-error-wrapper');
const Rating = require('./rating.schema');
const { validateData } = require('../../common/validation/isExist.validation');
const { InvalidRequestBodyError } = require('../../common/errors/errors-list');
const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const router = express.Router();

router.post(
  '/:id',
  wrap(async ({ body: { placeId, userId, rating: r } }, res) => {
    if (!validateData(placeId, userId, r)) {
      throw new InvalidRequestBodyError();
    }
    const rating = new Rating({
      placeId,
      userId,
      rating: r,
    });

    await rating.save();
    res.status(StatusCodes.CREATED).send(ReasonPhrases.CREATED);
  }),
);

module.exports = router;
