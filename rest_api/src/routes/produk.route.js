const express = require("express");
const router = express.Router();
const {
  createOne,
  findAll,
  findById,
  updateById,
  deleteById,
  deleteAll,
} = require("../controllers/produk.controller");
const {
  verifyToken,
  isAdmin,
  isAdminOrCustomer,
} = require("../middlewares/authJwt");

router.post("/create-one", [verifyToken, isAdmin], createOne);
router.get("/", findAll);
router.get("/:id", [verifyToken, isAdminOrCustomer], findById);
router.put("/update-by-id/:id", [verifyToken, isAdmin], updateById);
router.delete("/delete-by-id/:id", [verifyToken, isAdmin], deleteById);
router.delete("/delete-all", [verifyToken, isAdmin], deleteAll);

module.exports = router;
