const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const createHttpError = require("http-errors");
const swaggerUi = require("swagger-ui-express");
const swagger = require("swagger-node-express");
// const swaggerJsdoc = require("swagger-jsdoc");
const { error } = require("./configs/error.config");
const { beranda } = require("./configs/beranda.config");
const db = require("./models");

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Hello World",
//       version: "1.0.0",
//     },
//   },
//   apis: ["./routes/*.*.js"], // files containing annotations as above
// };

// const openapiSpecification = swaggerJsdoc(options);

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use("/api/v1", swaggerUi.serve, swaggerUi.setup());
app.use(async (req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
swagger.setAppHandler(app);

db.sequelize.sync();
// db.sequelize.sync({ force: true });

// beranda
app.get("/", async (req, res) => {
  beranda(req, res);
});

// import routers
const user = require("./routes/user.route");
const produk = require("./routes/produk.route");

// routers
app.use("/", user);
// debug
app.get("/user", (req, res) => {
  const model = db.user;
  model
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      error(req, res, err);
    });
});
/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.use("/produk", produk);

// error 404 not founnd
app.use(async (req, res) => {
  error(req, res, createHttpError.NotFound());
});

module.exports = app;
