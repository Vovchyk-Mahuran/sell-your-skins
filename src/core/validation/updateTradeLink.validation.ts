import * as yup from 'yup';

export const updateTradeLinkValidation = yup.object().shape({
	url: yup.string().required('Trade Url missing').trim(),
});
