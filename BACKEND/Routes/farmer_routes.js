const express = require("express");

const router = express.Router();

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

router.get("/profile/:uid", (req, res, next) => {
  const userId = req.params.uid; // {uid : 'u1'}
  const user = DUMMY_USERS.find((u) => {
    return u.id === userId;
  });
  res.json({ user }); // {user} => {user : user}
});

module.exports = router;
