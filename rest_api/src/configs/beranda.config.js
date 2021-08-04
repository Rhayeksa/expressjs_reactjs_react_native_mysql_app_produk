const { date, time } = require("./currentDateTime.config");

exports.beranda = (req, res) => {
  res.send({
    code: res.statusCode,
    status: "Ok",
    message: "Successed",
    response: {
      title: "framework rest api",
      description:
        "rest api ini di dibuat menggunakan Expressjs dan sequelize. Dan menggunakan DBMS Mysql",
    },
    date,
    time,
  });
};
