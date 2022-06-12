const httpStatus = require('http-status');
const { Tags } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a tags
 * @param {Object} tagsBody
 * @returns {Promise<Tags>}
 */
const createTags = async (tagsBody) => {
  const tags = await Tags.create(tagsBody);
  return tags;
};

/**
 * Query for tagss
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryTagss = async (filter, options) => {
  const tagss = await Tags.paginate(filter, options);
  return tagss;
};

/**
 * Get tags by id
 * @param {ObjectId} id
 * @returns {Promise<Tags>}
 */
const getTagsById = async (id) => {
  return Tags.findById(id);
};

/**
 * Update tags by id
 * @param {ObjectId} tagsId
 * @param {Object} updateBody
 * @returns {Promise<Tags>}
 */
const updateTagsById = async (tagsId, updateBody) => {
  const tags = await getTagsById(tagsId);
  if (!tags) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Tags not found');
  }
  Object.assign(tags, updateBody);
  await tags.save();
  return tags;
};

/**
 * Delete tags by id
 * @param {ObjectId} tagsId
 * @returns {Promise<Tags>}
 */
const deleteTagsById = async (tagsId) => {
  const tags = await getTagsById(tagsId);
  if (!tags) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Tags not found');
  }
  await tags.remove();
  return tags;
};

module.exports = {
  createTags,
  queryTagss,
  getTagsById,
  updateTagsById,
  deleteTagsById,
};
