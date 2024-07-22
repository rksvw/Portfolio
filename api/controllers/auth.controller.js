const bcryptjs = require("bcryptjs");
const { prisma } = require("../utils/config.js");
const { errorHandler } = require("../utils/err");
const jwt = require("jsonwebtoken");

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

const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    console.log(validUser);

    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
    }

    const token = jwt.sign({ id: validUser.id }, process.env.JWT_SECRET);

    const { password: pass, ...rest } = validUser;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (err) {
    next(err);
  }
};

const google = async (req, res, next) => {
  const { email, name, googlePhotoUrl } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      const { password, ...rest } = user;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = await prisma.user.create({
        data: {
          fullname: name,
          username:
            name.toLowerCase().split(" ").join("") +
            Math.random().toString(9).slice(-4),
          email: email,
          password: hashPassword,
          profilePicture: googlePhotoUrl,
        },
      });
      const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);
      const { password, ...rest } = newUser;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  signin,
  google,
};
