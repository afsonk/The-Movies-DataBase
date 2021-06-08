import * as Yup from "yup"


export const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password should be at least 6 characters'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
})