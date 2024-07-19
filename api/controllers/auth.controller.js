const bcryptjs = require("bcryptjs");
const { prisma } = require("../utils/config.js");

const signup = async (req, res) => {
  const { fullname, username, email, password } = req.body;

  if (!fullname || !username || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
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
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  signup,
};
