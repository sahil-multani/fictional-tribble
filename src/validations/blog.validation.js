const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createBlog = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
    createdBy: Joi.string().custom(objectId).required(),
    tags: Joi.array().items(Joi.string().custom(objectId).required()).required(),
  }),
};

module.exports = {
  createBlog,
};
