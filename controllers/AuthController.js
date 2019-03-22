const passport = require('passport');
const UserModel = require('../database/models/UserModel');
const JWTService = require('../services/JWTService')

async function register(req, res) {
  const {email, password, type} = req.body;

  try {
    const user = new UserModel({email, type});
    UserModel.register(user, password, (err, user) => {
      if (err) {
        console.log(err);
      };
      const token = JWTService.generateToken(user);
      return res.send(token);
    });
  } catch (err) {
    return res.send(err);
  }
};

async function login(req, res) {
  const {email, password} = req.body;
  const user = await UserModel.findOne({email});
  if (!user) {
    console.log("1")
    return res.status(401).send("Invalid email/password");
  }

  const valid = user.authenticate(password);

  if (!valid) {
    console.log('2')
    return res.status(401).send("Invalid email/password");
  }

  const token = JWTService.generateToken(user);
  return res.json(token);
};

module.exports = {
  login,
  register
};