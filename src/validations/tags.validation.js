const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createTags = {
  body: Joi.object().keys({
    tag: Joi.string(),
  }),
};

const getTagss = {
  query: Joi.object().keys({
    tag: Joi.string(),
  }),
};

const getTags = {
  params: Joi.object().keys({
    tagsId: Joi.string().custom(objectId),
  }),
};

const updateTags = {
  params: Joi.object().keys({
    tagsId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      tag: Joi.string(),
    })
    .min(1),
};

const deleteTags = {
  params: Joi.object().keys({
    tagsId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createTags,
  getTagss,
  getTags,
  updateTags,
  deleteTags,
};
