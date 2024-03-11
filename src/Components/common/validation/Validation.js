import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup
    .string()
    .matches(
      /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
      'Name should only contain alphabets!',
    )
    .min(3, 'Name should have atleast 3 digits!')
    .max(12, 'Name should be only 12 digits!')
    .required('Name is required!'),

  email: yup
    .string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format!')
    .required('Email is required!'),

  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
      'Password must be at least 6 characters long and include at least one lowercase letter, one uppercase letter, and one digit!',
    )
    .required('Password is required!'),

  organization: yup
    .string()
    .matches(
      /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
      'Organization should only contain alphabets!',
    )
    .min(3, 'Organization should have atleast 3 digits!')
    .max(14, 'Organization should be only 14 digits!')
    .required('Organization is required!'),

  state: yup
    .string()
    .matches(
      /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
      'State should only contain alphabets!',
    )
    .required('State is required!'),
  city: yup
    .string()
    .matches(
      /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
      'City should only contain alphabets!',
    )
    .min(2, 'City should have atleast 2 digits!')
    .required('City is required!'),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format!')
    .required('Email is required!')
    .test('email-exists', 'Email already exists!', async function (value) {
      if (!value) return true;
      const emailExists = await checkEmailExistence(value);
      return !emailExists;
    }),

  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
      'Password must be at least 6 characters long and include at least one lowercase letter, one uppercase letter, and one digit!',
    )
    .required('Password is required!'),
});
