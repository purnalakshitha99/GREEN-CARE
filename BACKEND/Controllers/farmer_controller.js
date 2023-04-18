const HttpError = require("../Utils/http-error");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../Models/user_register_model");

const signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { name, email, address, phone, password } = req.body; // objcet destructuring, shorter way to do = const name = req.body.name

  let hasUser;
  try {
    hasUser = await User.findOne({ email: email });
  } catch (err) {
    return next(new HttpError("Signing up failed, please try again.", 500));
  }
  if (hasUser) {
    return next(
      new HttpError("email already exists. Pleas Login instead", 422)
    );
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return next(new HttpError("Could not create user, please try again.", 500));
  }

  const createdUser = new User({
    name,
    email,
    address,
    phone,
    bio: "farmer",
    password: hashedPassword,
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Creating user failed, please try again.", 500);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      "issaraha_dhore_yathura_thiyenne_isuru_laga",
      { expiresIn: "1h" }
    );
  } catch (err) {
    return next(new HttpError("Signing up failed, please try again.", 500));
  }

  res
    .status(201)
    .json({ userId: createdUser.id, email: createdUser.email, token: token });
};

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

  let token;
  try {
    token = jwt.sign(
      { userId: identifiedUser.id, email: identifiedUser.email },
      "issaraha_dhore_yathura_thiyenne_isuru_laga",
      { expiresIn: "1h" }
    );
  } catch (err) {
    return next(new HttpError("Login failed, please try again.", 500));
  }

  res.json({
    userId: identifiedUser.id,
    email: identifiedUser.email,
    token: token,
  });
};

const getUserById = async (req, res, next) => {
  const userId = req.params.uid; // {uid : 'u1'}

  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a user.",
      500
    );
    return next(error);
  }

  if (!user) {
    return next(
      new HttpError("Could not find a user for the provided id.", 404)
    );
  }

  res.json({ user: user.toObject({ getters: true }) }); // getters: true => to rid the _id from the response
};

const updateUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError(
        "Invalid inputs passed, please check and Re Enter data.",
        422
      )
    );
  }

  const { name, address, phone } = req.body;
  const userId = req.params.uid;

  let updatedUser;
  try {
    updatedUser = await User.findById(userId);
  } catch (err) {
    return next(
      new HttpError("Something went wrong, could not update user.", 500)
    );
  }

  updatedUser.name = name;
  updatedUser.address = address;
  updatedUser.phone = phone;

  try {
    await updatedUser.save();
  } catch (err) {
    return next(
      new HttpError("Something went wrong, could not update user.", 500)
    );
  }

  res.status(200).json({ updateUser: updatedUser.toObject({ getters: true }) });
};

const deleteUser = async (req, res, next) => {
  const userId = req.params.uid;

  try {
    await User.findByIdAndDelete(userId);
  } catch (err) {
    return next(new HttpError("Something went wrong , can't delete user", 500));
  }

  res.status(200).json({ message: "Deleted user." });
};

exports.getUserById = getUserById;
exports.signup = signup;
exports.login = login;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
