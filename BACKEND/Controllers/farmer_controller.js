const HttpError = require("../Utils/http-error");

const DUMMY_USERS = [
  {
    id: "u1",
    name: "lahiru",
    email: "l@gmail.com",
    address: "colombo",
    phone: "0712345678",
    bio: "famrer",
  },
];

const getUserById = (req, res, next) => {
  const userId = req.params.uid; // {uid : 'u1'}
  const user = DUMMY_USERS.find((u) => {
    return u.id === userId;
  });

  if (!user) {
    // return res
    //   .status(404)
    //   .json({ message: "Could not find a user for the provided id." });
    // // use return instead of using else block bcs with return code execution terminates

    throw new HttpError("Could not find a user for the provided id.", 404);
  }

  res.json({ user }); // {user} => {user : user}
};



exports.getUserById = getUserById;