const { local } = require("../configs/db.config");
const Sequelize = require("sequelize");

/**
 *  configurasi database
 *  local: local server, hosing: online server
 */
const sequelize = new Sequelize(local.DB, local.USER, local.PASSWORD, {
  host: local.HOST,
  dialect: local.dialect,
  pool: {
    min: local.pool.min,
    max: local.pool.max,
    aquire: local.pool.acquire,
    idle: local.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

/**
 *  pendefinisian table
 *  contoh: db.namaTable = require("./namaFile.js")(sequelize, Sequelize);
 */
db.user = require("./user.model")(sequelize, Sequelize);
db.produk = require("./produk.model")(sequelize, Sequelize);

/**
 *  pendefinisian relasi
 *  contoh:
 *    db.namaTablePrimary.belongsTo(db.namaTableForeign, {
 *      foreignKey: "fieldKey"
 *    })
 */

module.exports = db;
