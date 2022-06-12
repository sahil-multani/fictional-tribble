// const httpStatus = require('http-status');
const { Blog } = require('../models');
// const ApiError = require('../utils/ApiError');

/**
 * Create Blog
 * @param {Object} blogBody
 * @returns {Promise<User>}
 */
const createBlog = async (blogBody) => {
  return Blog.create(blogBody);
};

module.exports = {
  createBlog,
};
