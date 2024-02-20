const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    max: 100,
  },
  technologies: [String],
});

module.exports = projectSchema;
