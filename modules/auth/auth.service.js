const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { EXPIRES_IN } = require('./constants');

const validateData = (log, pass) => {
  return (log && pass && log !== '' && pass !== '')
}

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(process.env.SALT_ROUNDS);
  return await bcrypt.hash(password, salt);
}

const comparePasswords = (first, second) => {
  return bcrypt.compare(first, second)
}

const createAccessToken = (user) => {
  return jwt.sign(
    {
      name: user.nickname,
      id: user._id,
    },
    process.env.TOKEN_SECRET,
    {
      expiresIn: EXPIRES_IN
    }
  );
}


module.exports = {
  validateData,
  encryptPassword,
  comparePasswords,
  createAccessToken
}
