const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const routeSchema = new Schema(
  {
    path: {
      type: [
        {
          type: String,
        },
      ],
      validate: [
        (path) => {
          return path.length >= 2;
        },
        "path should be more than 2 elements",
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Route", routeSchema);
