module.exports = (sequelize, Sequelize) => {
  const model = sequelize.define(
    "user",
    {
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Username cannot be empty" },
        },
        unique: {
          args: true,
          msg: "Username already exist",
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Password cannot be empty" },
        },
      },
      role: {
        type: Sequelize.ENUM("admin", "customer"),
        allowNull: false,
        validate: {
          isIn: {
            args: [["admin", "customer"]],
            msg: "Role not available",
          },
          notNull: { msg: "Role cannot be empty" },
        },
        // values: ["admin, customer"],
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
