const createHttpError = require("http-errors");
const { verify } = require("jsonwebtoken");
const { secret } = require("../configs/auth.config");
const { error } = require("../configs/error.config");
const db = require("../models/index");
const model = db.user;

exports.verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return error(req, res, createHttpError.Forbidden());
  }
  verify(token, secret, (err, decoded) => {
    if (err) {
      return error(req, res, createHttpError.Unauthorized());
    }
    req.userId = decoded.id;
    next();
  });
};
exports.isAdmin = async (req, res, next) => {
  model.findOne({ where: { id: req.userId } }).then((data) => {
    if (data.role === "admin") {
      next();
      return;
    }
    error(req, res, createHttpError.Unauthorized());
  });
};
exports.isAdminOrCustomer = async (req, res, next) => {
  model.findOne({ where: { id: req.userId } }).then((data) => {
    if (data.role === "admin" || data.role === "customer") {
      next();
      return;
    }
    error(req, res, createHttpError.Unauthorized());
  });
};
