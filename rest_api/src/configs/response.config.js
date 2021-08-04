const { compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { secret } = require("./auth.config");
const { date, time } = require("./currentDateTime.config");
const { error } = require("./error.config");
const { getPagination, getPagingData } = require("./pagination.config");

exports.resCreateOne = async (req, res, data) => {
  res.send({
    code: 201,
    status: "Created",
    message: "Successed",
    response: data,
    date,
    time,
  });
};
exports.resFindBykey = async (req, res, data) => {
  res.send({
    code: data == null ? 201 : 200,
    status: data == null ? "No Content" : "Ok",
    message: "Successed",
    response: data,
    date,
    time,
  });
};
exports.resFindAll = async (req, res, data) => {
  const { page, size } = req.query;
  const { limit } = getPagination(page, size);
  const dataPerPage = getPagingData(data, page, limit);
  res.send({
    code: dataPerPage.datas == 0 ? 204 : 200,
    status: dataPerPage.datas == 0 ? "No Content" : "Ok",
    message: "Successed",
    response: dataPerPage,
    date,
    time,
  });
};
exports.resUpdateById = async (req, res, data) => {
  const id = req.params.id;
  res.send({
    code: data == 0 ? 201 : 200,
    status: data == 0 ? "No Content" : "Ok",
    message:
      data == 0 ? `No data with id ${id}` : "Data was updated successfully",
    date,
    time,
  });
};
exports.resDeleteById = async (req, res, data) => {
  const id = req.params.id;
  res.send({
    code: data == 0 ? 201 : 200,
    status: data == 0 ? "No Content" : "Ok",
    message:
      data == 0 ? `No data with id ${id}` : "Data was deleted successfully",
    date,
    time,
  });
};
exports.resDeleteAll = async (req, res, data) => {
  res.send({
    code: data == 0 ? 201 : 200,
    status: data == 0 ? "No Content" : "Ok",
    message: `${data} data were deleted successfully!`,
    date,
    time,
  });
};
exports.resLogin = async (req, res, data) => {
  res.send({
    code: data == null ? 201 : 200,
    status: data == null ? "No Content" : "Ok",
    message: data == null ? "Username belum terdaftar" : "Successed",
    response: {
      id: data == null ? null : data.id,
      username: data == null ? null : data.username,
      role: data == null ? null : data.role,
      accessToken:
        data == null
          ? null
          : sign({ id: data.id }, secret, { expiresIn: 86400 }),
    },
    date,
    time,
  });
};
