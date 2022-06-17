const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { subCategoryService } = require('../services');

const createSubCategory = catchAsync(async (req, res) => {
  const subCategory = await subCategoryService.createSubCategory(req.body);
  res.status(httpStatus.CREATED).send(subCategory);
});

const getSubCategorys = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await subCategoryService.querySubCategorys(filter, options);
  res.send(result);
});

const getSubCategory = catchAsync(async (req, res) => {
  const subCategory = await subCategoryService.getSubCategoryById(req.params.subCategoryId);
  if (!subCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'SubCategory not found');
  }
  res.send(subCategory);
});

const updateSubCategory = catchAsync(async (req, res) => {
  const subCategory = await subCategoryService.updateSubCategoryById(req.params.subCategoryId, req.body);
  res.send(subCategory);
});

const deleteSubCategory = catchAsync(async (req, res) => {
  await subCategoryService.deleteSubCategoryById(req.params.subCategoryId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSubCategory,
  getSubCategorys,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
};