import Joi from 'joi';

const registerSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().messages({
    'string.empty': 'email is required'
  }),
  password: Joi.string().alphanum().min(6).required().trim().messages({
    'string.empty': 'password is required',
    'string.alphanum': 'password must contain number or alphabet',
    'string.min': 'password mush have at least 6 characters'
  }),
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .trim()
    .messages({
      'any.only': 'password and confirm password did not match',
      'string.empty': 'confirm password is required'
    })
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, {
    abortEarly: false
  });
  console.dir(error);
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateRegister;
