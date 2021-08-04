exports.local = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "db_produk",
  dialect: "mysql",
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
};

exports.hosting = {
  HOST: "",
  USER: "",
  PASSWORD: "",
  DB: "",
  dialect: "mysql",
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
};
