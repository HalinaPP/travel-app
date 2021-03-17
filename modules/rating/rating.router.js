const express = require('express');
const wrap = require('../../common/errors/async-error-wrapper');
const Rating = require('./rating.schema');
const { validateData } = require('../../common/validation/isExist.validation');
const { InvalidRequestBodyError } = require('../../common/errors/errors-list');
const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const router = express.Router();

router.post(
  '/:id',
  wrap(async ({ body: { placeId, nickName, avatar, feedbackText, rating: rtg } }, res) => {
    if (!validateData(placeId, nickName, rtg, avatar)) {
      throw new InvalidRequestBodyError();
    }
    const rating = new Rating({
      placeId,
      nickName,
      rating: rtg,
      avatar,
      feedbackText,
    });

    await rating.save();
    res.status(StatusCodes.CREATED).send(ReasonPhrases.CREATED);
  }),
);

module.exports = router;
