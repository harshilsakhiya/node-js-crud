const mongoose = require("mongoose");
const validator = require("validator");

const faimelySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Emial id already present"],
    validator(value) {
      if (validator.isEmail(value)) {
        throw new Error("invalida email");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
    min: 10,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Faimely = new mongoose.model('Faimely',faimelySchema )

module.exports = Faimely;

