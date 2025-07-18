import * as yup from 'yup';

export const SIGN_UP_SCHEMA = yup.object({
  firstName: yup.string().required().min(1).max(50),
  lastName: yup.string().required().min(1).max(50),
  email: yup.string().required().email('Email is not valid'),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      'Password is not valid '
    ),
});
