const HttpError = require('../Utils/http-error');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../Models/user_register_model');
const ContactFO = require('../Models/contactFO');

const signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { name, email, address, phone, password } = req.body; // objcet destructuring, shorter way to do = const name = req.body.name

  let hasUser;
  try {
    hasUser = await User.findOne({ email: email });
  } catch (err) {
    return next(new HttpError('Signing up failed, please try again.', 500));
  }
  if (hasUser) {
    return next(
      new HttpError('email already exists. Pleas Login instead', 422)
    );
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return next(new HttpError('Could not create user, please try again.', 500));
  }

  const createdUser = new User({
    name,
    email,
    address,
    phone,
    category: 'Farmer',
    password: hashedPassword,
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError('Creating user failed, please try again.', 500);
    return next(error);
  }

  // let token;
  // try {
  //   token = jwt.sign(
  //     { userId: createdUser.id, email: createdUser.email },
  //     'issaraha_dhore_yathura_thiyenne_isuru_laga',
  //     { expiresIn: '1h' }
  //   );
  // } catch (err) {
  //   return next(new HttpError('Signing up failed, please try again.', 500));
  // }

  res.status(201).json({
    message: 'success',
  });
};

const getUserById = async (req, res, next) => {
  const userEmail = req.params.email;
  let user;
  try {
    user = await User.findOne({ email: userEmail });
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a user.',
      500
    );
    return next(error);
  }

  if (!user) {
    return next(
      new HttpError('Could not find a user for the provided id.', 404)
    );
  }

  res.json({ user: user.toObject({ getters: true }) }); // getters: true => to rid the _id from the response
};

const updateUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError(
        'Invalid inputs passed, please check and Re Enter data.',
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
      new HttpError('Something went wrong, could not update user.', 500)
    );
  }

  updatedUser.name = name;
  updatedUser.address = address;
  updatedUser.phone = phone;

  try {
    await updatedUser.save();
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not update user.', 500)
    );
  }

  res
    .status(200)
    .json({
      updateUser: updatedUser.toObject({ getters: true }),
      message: 'success',
    });
};

const deleteUser = async (req, res, next) => {
  const userId = req.params.uid;

  try {
    await User.findByIdAndDelete(userId);
  } catch (err) {
    return next(new HttpError("Something went wrong , can't delete user", 500));
  }

  res.status(200).json({ message: 'Deleted user.' });
};


const contactFieldOfficer = async (req, res, next) => {
  const { name, email, address, phone, reason } = req.body; // objcet destructuring, shorter way to do = const name = req.body.name

  const contactData = new ContactFO({
    name,
    email,
    address,
    phone,
    reason
  });

  try {
    await contactData.save();
  } catch (err) {
    const error = new HttpError('Contact Field Officer failed, please try again.', 500);
    return next(error);
  }

  res.status(201).json({
    message: 'success',
  });
};


// const getContactFOdata = async (req, res, next) => {
//   const userEmail = req.params.email;
//   let data;
//   try {
//     data = await ContactFO.findOne({ email: userEmail });
//   } catch (err) {
//     const error = new HttpError(
//       'Something went wrong, could not find a contact data.',
//       500
//     );
//     return next(error);
//   }

//   if (!data) {
//     return next(
//       new HttpError('Could not find a contact data for the provided id.', 404)
//     );
//   }

//   res.json({ data: data.toObject({ getters: true }) }); // getters: true => to rid the _id from the response
// };



const getContactFOdata = async (req, res, next) => {
  const userEmail = req.params.email;
  let data;
  try {
    data = await ContactFO.find({ email: userEmail });
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find contact data.',
      500
    );
    return next(error);
  }

  if (!data || data.length === 0) {
    return next(
      new HttpError('Could not find any contact data for the provided email.', 404)
    );
  }

  res.json({ data: data.map(item => item.toObject({ getters: true })) });
};


exports.signup = signup;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.contactFieldOfficer = contactFieldOfficer;
exports.getContactFOdata = getContactFOdata;
