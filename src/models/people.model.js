const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const peopleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
    },
    sex: {
        type: Boolean,
        required: true,
        trim: true,
    },
    DOB: {
        type: Date,
        required: true,
        trim: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
peopleSchema.plugin(toJSON);
peopleSchema.plugin(paginate);

const People = mongoose.model('People', peopleSchema);

module.exports = People;