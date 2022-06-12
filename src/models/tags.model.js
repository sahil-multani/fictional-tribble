const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const tagsSchema = mongoose.Schema(
  {
		tag: {
			type: String,
			required: true,
			trim: true,
		},
	},
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
tagsSchema.plugin(toJSON);
tagsSchema.plugin(paginate);

/**
 * @typedef Tags
 */
const Tags = mongoose.model('Tags', tagsSchema);

module.exports = Tags;
