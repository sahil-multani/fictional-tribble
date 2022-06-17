const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createSubCategory = {
  body: Joi.object().keys(
      {
		name: Joi.string(),
	}
  ),
};

const getSubCategorys = {
  query: Joi.object().keys(
      {
		name: Joi.string(),
	}
  ),
};

const getSubCategory = {
  params: Joi.object().keys({
    subCategoryId: Joi.string().custom(objectId),
  }),
};

const updateSubCategory = {
  params: Joi.object().keys({
    subCategoryId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
		name: Joi.string(),
	})
    .min(1),
};

const deleteSubCategory = {
  params: Joi.object().keys({
    subCategoryId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSubCategory,
  getSubCategorys,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
};
