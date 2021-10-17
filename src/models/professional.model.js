const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const professionnalSchema = mongoose.Schema(
  {
    degree: {
      type: String,
      required: true,
      trim: true,
    },
    experience: {
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
professionnalSchema.plugin(toJSON);
professionnalSchema.plugin(paginate);

const Professional = mongoose.model('Professional', professionnalSchema);

module.exports = Professional;