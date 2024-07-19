const { prisma } = require("../utils/config.js");

const getTest = (req, res) => {
  res.json({
    message: "Api is working",
  });
};

const getUser = async (req, res) => {
  const allUser = await prisma.user.findMany();

  res.json({ status: 200, data: allUser });
};

module.exports = { getTest, getUser };
