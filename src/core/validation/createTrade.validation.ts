import * as yup from 'yup';

export const createTradeValidation = yup.object().shape({
	method: yup.string().required(),
	email: yup.string().email('email must be valid').required('Email is required'),
	wallet: yup.string().required(),
});
