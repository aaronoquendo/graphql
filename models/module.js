const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moduleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  html: {
    type: String,
    required: true
  },
  css: {
    type: String,
    required: true
  },
  htmlInjectionRelation: {
    type: String,
    required: true
  },
  defaultContent: {
    type: String,
    required: true
  },
  dataTypeId: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Module', moduleSchema);