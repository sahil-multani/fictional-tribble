const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProduct = {
  body: Joi.object().keys({
    category: Joi.string(),
    name: Joi.string(),
    price: Joi.string(),
    color: Joi.string(),
    rating: Joi.string(),
    images: Joi.string(),
    size: Joi.string(),
  }),
};

const getProducts = {
  query: Joi.object().keys({
    category: Joi.string(),
    name: Joi.string(),
    price: Joi.string(),
    color: Joi.string(),
    rating: Joi.string(),
    images: Joi.string(),
    size: Joi.string(),
  }),
};

const getProduct = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};

const updateProduct = {
  params: Joi.object().keys({
    productId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      category: Joi.string(),
      name: Joi.string(),
      price: Joi.string(),
      color: Joi.string(),
      rating: Joi.string(),
      images: Joi.string(),
      size: Joi.string(),
    })
    .min(1),
};

const deleteProduct = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
