const httpStatus = require('http-status');
const { blogService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const createBlog = catchAsync(async (req, res) => {
  const blog = await blogService.createBlog({ ...req.body });
  res.status(httpStatus.CREATED).send(blog);
});

module.exports = {
  createBlog,
};
