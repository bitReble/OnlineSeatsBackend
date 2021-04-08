// importing modules
const {
  currentUser,
  requireAuth,
  validateRequest,
} = require("@coders2authority/bus-common");
const express = require("express");
const { body } = require("express-validator");

// importing user defined controller modules
const scheduleController = require("../controllers/schedule");
const { allowOperator } = require("../middlewares/access-control");

// importing user defined schema modules

// initializing router
const router = express.Router();

// POST /schedule/create-schedule
router.post(
  "/create-schedule",
  currentUser,
  requireAuth,
  allowOperator,
  [
    body("route").notEmpty().withMessage("route should be provided"),
    body("bus_type").notEmpty().withMessage("bus_type should be provided"),
    body("from").notEmpty().withMessage("from should be provided"),
    body("to").notEmpty().withMessage("to should be provided"),
    body("departure").notEmpty().withMessage("departure should be provided"),
    body("arrival").notEmpty().withMessage("arrival should be provided"),
    body("recurring")
      .isArray({ min: 1 })
      .withMessage("recurring should be provided"),
    body("price").isInt().withMessage("price should be provided"),
  ],
  validateRequest,
  scheduleController.createSchedule
);

// exporting the router
module.exports = router;
