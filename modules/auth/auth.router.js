const express = require('express');
const wrap = require('../../common/errors/async-error-wrapper');
const User = require('./auth.user.schema');
const router = express.Router();
const cloudinary = require('cloudinary');
const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const {
  NotFoundError,
  AlreadyExistsError,
  InternalServerError,
  InvalidRequestBodyError,
  WrongPasswordError } = require('../../common/errors/errors-list');
const {
  validateData,
  createAccessToken,
  comparePasswords,
  encryptPassword } = require('./auth.service');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_APIKEY,
  api_secret: process.env.CLOUD_APISECRET,
})

router.post(
  '/register',
  // upload.single('avatar'),
  wrap(async (req, res) => {
    console.log(req.files);
    const publish = await cloudinary.uploader.upload(req.files.avatar.path);
    const { nickname, password } = req.body;
    const validData = validateData(nickname, password);
    if (!validData) {
      throw new InvalidRequestBodyError();
    }
    const userExists = await User
      .findOne({ nickname });
    if (userExists) {
      throw new AlreadyExistsError(nickname)
    } else {
      const encryptedPassword = await encryptPassword(password);
      const user = new User({ nickname, password: encryptedPassword, avatar: publish.url });
      try {
        await user.save();
        res.status(StatusCodes.CREATED).json({
          error: null,
          statusText: ReasonPhrases.CREATED,
          data:
            {
              message: 'User created!'
            }
        });
      } catch(error) {
        throw new InternalServerError();
      }
    }



  })
);
router.post(
  '/login',
  // upload.none(),
  wrap(async (req, res) => {
    console.log(req.body);
    const { nickname, password } = req.body;
    const validData = validateData(nickname, password);
    if (!validData) {
      throw new InvalidRequestBodyError();
    }
    const user = await User.findOne({ nickname })
    if (!user) {
      throw new NotFoundError(nickname)
    }
    const validPassword = await comparePasswords(password, user.password);
    if (!validPassword) {
      throw new WrongPasswordError(nickname)
    }
    try {
      const accessToken = createAccessToken(user);
      res.status(StatusCodes.ACCEPTED).json({
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
    } catch(e) {
      throw new InternalServerError();
    }
  })
);


module.exports = router;
