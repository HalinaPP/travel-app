const express = require('express');
const wrap = require('../../common/errors/async-error-wrapper');
const User = require('./auth.user.schema');
const router = express.Router();
const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const {
  NotFoundError,
  AlreadyExistsError,
  WrongPasswordError } = require('../../common/errors/errors-list');
const {
  validateData,
  createAccessToken,
  comparePasswords,
  encryptPassword } = require('./auth.service');

router.post(
  '/register',
  wrap(async (req, res) => {
    const { nickname, password } = req.body;
    const validData = validateData(nickname, password);
    if (!validData) {
      return res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    }
    const userExists = await User
      .findOne({ nickname });
    if (userExists) {
      throw new AlreadyExistsError(nickname)
    } else {
      const encryptedPassword = await encryptPassword(password);
      const user = new User({ nickname, password: encryptedPassword });
      try {
        await user.save();
        res.status(StatusCodes.CREATED).send(ReasonPhrases.CREATED);
      } catch(error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
      }
    }



  })
);
router.post(
  '/login',
  wrap(async (req, res) => {
    const { nickname, password } = req.body;
    const validData = validateData(nickname, password);
    if (!validData) {
      return res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    }
    const user = await User.findOne({ nickname })
    if (!user) {
      throw new NotFoundError(nickname)
    }
    const validPassword = await comparePasswords(req.body.password, user.password);
    if (!validPassword) {
      throw new WrongPasswordError(nickname)
    }

    const accessToken = createAccessToken(user);


    res.status(200).json({
      error: null,
      statusText: ReasonPhrases.ACCEPTED,
      data: {
        message: 'Login successful',
        data:
          {
            token: accessToken
          },
      }
    })
  })
);

module.exports = router;
