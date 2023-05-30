const HttpError = require("../Utils/http-error");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../Models/user_register_model");

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let identifiedUser;
  try {
    identifiedUser = await User.findOne({ email: email });
  } catch (err) {
    return next(new HttpError("Signing up failed, please try again.", 500));
  }

  if (!identifiedUser) {
    return next(
      new HttpError("Invalid Credentials, could not log you in.", 401)
    ); //401 => unauthenticated
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, identifiedUser.password); // compare returns a promise
  } catch (err) {
    return next(
      new HttpError(
        "Could not log you in, please check your credentials and try again.",
        500
      )
    );
  }

  if (!isValidPassword) {
    return next(
      new HttpError("Invalid Credentials, could not log you in.", 401)
    );
  }

  // let token;
  // try {
  //   token = jwt.sign(
  //     { userId: identifiedUser.id, email: identifiedUser.email },
  //     "issaraha_dhore_yathura_thiyenne_isuru_laga",
  //     { expiresIn: "1h" }
  //   );
  // } catch (err) {
  //   return next(new HttpError("Login failed, please try again.", 500));
  // }

  res.json({
    user: identifiedUser,
    message:"success"
  });
};


exports.login = login;

