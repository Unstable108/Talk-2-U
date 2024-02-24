const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    //how much time does this token expire
    expiresIn: "300d",
  });
};

module.exports = generateToken;
