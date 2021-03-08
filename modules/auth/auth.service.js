const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const validateData = (user) => {

}

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
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
    process.env.TOKEN_SECRET
  );
}

const createRefreshToken = (user) => {

}

module.exports = {
  validateData,
  encryptPassword,
  comparePasswords,
  createAccessToken,
  createRefreshToken,
}
