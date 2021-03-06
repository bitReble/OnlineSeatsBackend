const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scheduleSchema = new Schema(
  {
    route: {
      type: Schema.Types.ObjectId,
      ref: "Route",
      required: true,
    },
    bus_type: {
      type: Schema.Types.ObjectId,
      ref: "BusType",
      required: true,
    },
    from: {
      type: Date,
      required: true,
    },
    to: {
      type: Date,
      required: true,
    },
    departure: {
      type: String,
      required: true,
    },
    arrival: {
      type: String,
      required: true,
    },
    recurring: [
      {
        type: String,
        required: true,
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    tickets: [
      {
        type: Schema.Types.ObjectId,
        ref: "Ticket",
        required: true,
      },
    ],
    creator: {
      type: Schema.Types.ObjectId,
      ref: "Operator",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Schedule", scheduleSchema);
