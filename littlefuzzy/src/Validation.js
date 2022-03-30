import * as yup from 'yup';

// Making Form Value Test for Form component

const formTest = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Name is required'),

    email: yup
    .string()
    .email()
    .required('Email is required'),

    password: yup
    .string()
    .required('Password is required')
}) 

export default formTest
