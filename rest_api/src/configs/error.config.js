const { date, time } = require("./currentDateTime.config");
const createHttpError = require("http-errors");

exports.error = (req, res, err, msg) => {
  let errorOption;
  if (err.name == "SequelizeValidationError") {
    errorOption = createHttpError.BadRequest();
  } else if (err.name == "SequelizeUniqueConstraintError") {
    errorOption = createHttpError.BadRequest();
  } else if (err.name == "SequelizeConnectionRefusedError") {
    errorOption = createHttpError.InternalServerError();
  } else if (err.name == "UnauthorizedError") {
    errorOption = createHttpError.Unauthorized();
  } else if (err.name == "ForbiddenError") {
    errorOption = createHttpError.Forbidden();
  } else {
    errorOption = createHttpError.NotFound();
  }
  console.log("\n\n\t" + err + "\n");
  res.status(errorOption.statusCode).send({
    code: errorOption.statusCode,
    status: errorOption.message,
    message: msg ? msg : err.message,
    response: null,
    date,
    time,
  });
};
