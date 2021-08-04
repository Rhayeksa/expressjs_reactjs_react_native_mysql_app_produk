module.exports = (sequelize, Sequelize) => {
  const model = sequelize.define(
    "produk",
    {
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Nama cannot be empty",
          },
        },
      },
      harga: {
        type: Sequelize.INTEGER,
        isNumeric: true,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Harga cannot be empty",
          },
          isNumeric: {
            msg: "Harga is filled with numbers",
          },
        },
      },
      stok: {
        type: Sequelize.INTEGER,
        isNumeric: true,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Stok is filled with numbers",
          },
        },
      },
      deskripsi: {
        type: Sequelize.TEXT,
      },
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    }
  );
  return model;
};
