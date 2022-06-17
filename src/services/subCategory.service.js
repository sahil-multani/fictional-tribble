const httpStatus = require('http-status');
const { SubCategory } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a subCategory
 * @param {Object} subCategoryBody
 * @returns {Promise<SubCategory>}
 */
const createSubCategory = async (subCategoryBody) => {
  const subCategory = await SubCategory.create(subCategoryBody);
  return subCategory;
};

/**
 * Query for subCategorys
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const querySubCategorys = async (filter, options) => {
  const subCategorys = await SubCategory.paginate(filter, options);
  return subCategorys;
};

/**
 * Get subCategory by id
 * @param {ObjectId} id
 * @returns {Promise<SubCategory>}
 */
const getSubCategoryById = async (id) => {
  return SubCategory.findById(id);
};

/**
 * Update subCategory by id
 * @param {ObjectId} subCategoryId
 * @param {Object} updateBody
 * @returns {Promise<SubCategory>}
 */
const updateSubCategoryById = async (subCategoryId, updateBody) => {
  const subCategory = await getSubCategoryById(subCategoryId);
  if (!subCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'SubCategory not found');
  }
  Object.assign(subCategory, updateBody);
  await subCategory.save();
  return subCategory;
};

/**
 * Delete subCategory by id
 * @param {ObjectId} subCategoryId
 * @returns {Promise<SubCategory>}
 */
const deleteSubCategoryById = async (subCategoryId) => {
  const subCategory = await getSubCategoryById(subCategoryId);
  if (!subCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'SubCategory not found');
  }
  await subCategory.remove();
  return subCategory;
};

module.exports = {
  createSubCategory,
  querySubCategorys,
  getSubCategoryById,
  updateSubCategoryById,
  deleteSubCategoryById,
};
