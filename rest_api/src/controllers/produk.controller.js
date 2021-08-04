const db = require("../models");
const model = db.produk;
const { error } = require("../configs/error.config");
const { getPagination } = require("../configs/pagination.config");
const {
  resCreateOne,
  resFindAll,
  resFindBykey,
  resUpdateById,
  resDeleteById,
  resDeleteAll,
} = require("../configs/response.config");

exports.createOne = async (req, res) => {
  model
    .create(req.body)
    .then((data) => {
      resCreateOne(req, res, data);
    })
    .catch((err) => {
      error(req, res, err);
    });
};
exports.findById = async (req, res) => {
  model
    .findOne({ where: { id: req.params.id } })
    .then((data) => {
      resFindBykey(req, res, data);
    })
    .catch((err) => {
      error(req, res, err);
    });
};
exports.findAll = async (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);
  model
    .findAndCountAll({ limit, offset })
    .then((data) => {
      resFindAll(req, res, data);
    })
    .catch((err) => {
      error(req, res, err);
    });
};
exports.updateById = async (req, res) => {
  const id = req.params.id;
  model
    .update(req.body, { where: { id: id } })
    .then((data) => {
      resUpdateById(req, res, data);
    })
    .catch((err) => {
      error(req, res, err);
    });
};
exports.deleteById = async (req, res) => {
  const id = req.params.id;
  model
    .destroy({ where: { id: id } })
    .then((data) => {
      resDeleteById(req, res, data);
    })
    .catch((err) => {
      error(req, res, err);
    });
};
exports.deleteAll = async (req, res) => {
  model
    .destroy({ where: {} })
    .then((data) => {
      resDeleteAll(req, res, data);
    })
    .catch((err) => {
      error(req, res, err);
    });
};
