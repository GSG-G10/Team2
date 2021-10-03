const Joi = require('joi');

const signUpValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  isdmin: Joi.boolean(),
  imgUrl: Joi.any(),
});

module.exports = signUpValidation;
