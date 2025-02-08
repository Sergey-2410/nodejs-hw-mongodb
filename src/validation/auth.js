import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().required().min(2).max(30),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
