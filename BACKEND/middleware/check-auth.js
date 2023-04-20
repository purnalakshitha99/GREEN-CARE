const jwt = require('jsonwebtoken');
const HttpError = require('../Utils/http-error');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
    console.log('1');
    if (!token) {
      throw new Error('Authentication failed!');
      console.log('2');
    }
    console.log('3');
    const decodedToken = jwt.verify(
      token,
      'issaraha_dhore_yathura_thiyenne_isuru_laga'
    );
    console.log('4');
    req.userData = { userId: decodedToken.userId, email: decodedToken.email };
    next();
  } catch (err) {
    return next(new HttpError('Authentication failed ', 401));
  }
};
