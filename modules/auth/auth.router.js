const express = require('express');
const wrap = require('../../common/errors/async-error-wrapper');
const User = require('./auth.user.schema');
const router = express.Router();
const {
  createAccessToken,
  comparePasswords,
  encryptPassword } = require('./auth.service');

router.post(
  '/register',
  wrap(async (req, res) => {
    const userExists = await User
      .findOne({ nickname: req.body.nickname });
    if (userExists) {
      return res.status(400).json({error: 'That user already exists'})
    } else {
      const password = await encryptPassword(req.body.password);
      const user = new User({
        nickname: req.body.nickname,
        password,
      })
      try {
        const savedUser = await user.save();
        res.status(201).json({ error: null, data: savedUser })
      } catch(error) {
        res.status(400).json({ error })
      }
    }



  })
);
router.post(
  '/login',
  wrap(async (req, res) => {
    const user = await User.findOne({nickname: req.body.nickname})
    if (!user) {
      return res.status(403).json({error: 'User not found!'})
    }
    const validPassword = await comparePasswords(req.body.password, user.password);
    if (!validPassword) {
      return res.status(403).json({
        error: "Password is wrong"
      });
    }

    const accessToken = createAccessToken(user);


    res.status(200).json({
      error: null,
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
