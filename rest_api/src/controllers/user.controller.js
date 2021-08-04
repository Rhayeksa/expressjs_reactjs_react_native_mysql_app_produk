const { hashSync, compareSync } = require("bcryptjs");
const createHttpError = require("http-errors");
const { error } = require("../configs/error.config");
const { resCreateOne, resLogin } = require("../configs/response.config");
const db = require("../models");
const model = db.user;

exports.register = async (req, res) => {
  model
    .create({
      username: req.body.username,
      password: hashSync(req.body.password, 8),
      role: req.body.role,
    })
    .then((data) => {
      resCreateOne(req, res, data);
    })
    .catch((err) => {
      error(req, res, err);
    });
};
exports.login = async (req, res) => {
  model
    .findOne({ where: { username: req.body.username } })
    .then((data) => {
      if (data == null) {
        resLogin(req, res, data);
      } else {
        if (!compareSync(req.body.password, data.password)) {
          error(
            req,
            res,
            createHttpError.Unauthorized(),
            "Incorrect username or password"
          );
        }
        resLogin(req, res, data);
      }
    })
    .catch((err) => {
      error(req, res, err);
    });
};
