const validateData = (...args) => {
  return args.every((e) => e && e !== '');
};

module.exports = {
  validateData,
};
