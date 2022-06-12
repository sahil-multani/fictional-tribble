const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { tagsService } = require('../services');

const createTags = catchAsync(async (req, res) => {
  const tags = await tagsService.createTags(req.body);
  res.status(httpStatus.CREATED).send(tags);
});

const getTagss = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['tag']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await tagsService.queryTagss(filter, options);
  res.send(result);
});

const getTags = catchAsync(async (req, res) => {
  const tags = await tagsService.getTagsById(req.params.tagsId);
  if (!tags) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Tags not found');
  }
  res.send(tags);
});

const updateTags = catchAsync(async (req, res) => {
  const tags = await tagsService.updateTagsById(req.params.tagsId, req.body);
  res.send(tags);
});

const deleteTags = catchAsync(async (req, res) => {
  await tagsService.deleteTagsById(req.params.tagsId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createTags,
  getTagss,
  getTags,
  updateTags,
  deleteTags,
};
