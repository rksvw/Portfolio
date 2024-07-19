const bcryptjs = require("bcryptjs");
const { prisma } = require("../utils/config.js");
const { errorHandler } = require("../utils/err");

const signup = async (req, res, next) => {
  const { fullname, username, email, password } = req.body;

  if (!fullname || !username || !email || !password) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = await prisma.user.create({
    data: {
      fullname: fullname,
      username: username,
      email: email,
      password: hashPassword,
    },
  });

  try {
    // response to check if we save it
    res.json({
      status: 200,
      data: newUser,
      msg: "User is created Successfully",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signup,
};
