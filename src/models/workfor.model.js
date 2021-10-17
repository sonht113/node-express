const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const workForSchema = mongoose.Schema(
  {
    dateOfJoining: {
        type: Date,
        required: true,
        trim: true,
    },
    salary: {
        type: Number,
        required: true,
        trim: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
workForSchema.plugin(toJSON);
workForSchema.plugin(paginate);

const WorkFor = mongoose.model('WorkFor', workForSchema);

module.exports = WorkFor;