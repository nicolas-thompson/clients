const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  company: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Client', clientSchema);
