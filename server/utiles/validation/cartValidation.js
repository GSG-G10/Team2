const Joi = require('joi');

const cartValidation = Joi.object({
  userId: Joi.number().required(),
  productId: Joi.number().required(),
  quantity: Joi.number().required(),
});

module.exports = cartValidation;
