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

// PUT /schedule/update-schedule
router.put(
  "/update-schedule",
  currentUser,
  requireAuth,
  allowOperator,
  [
    body("schedule_id")
      .notEmpty()
      .withMessage("schedule_id should be provided"),
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
  scheduleController.updateSchedule
);

// POST /schedule/get-schedule
router.get(
  "/get-schedule",
  currentUser,
  requireAuth,
  scheduleController.getSchedule
);

// POST /schedule/search-schedule
router.post(
  "/search-schedule",
  currentUser,
  requireAuth,
  scheduleController.searchSchedule
);

// POST /schedule/delete-schedule
router.post(
  "/delete-schedule",
  currentUser,
  requireAuth,
  scheduleController.deleteSchedule
);

// POST /schedule/get-single-schedule
router.post(
  "/get-single-schedule",
  currentUser,
  requireAuth,
  scheduleController.getSingleSchedule
);

// exporting the router
module.exports = router;
