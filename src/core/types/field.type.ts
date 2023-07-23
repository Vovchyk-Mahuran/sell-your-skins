import * as yup from 'yup';

export interface IField {
	label: string;
	name: string;
	placeholder: string;
	type: string;
	validation: yup.AnySchema;
	value?: string;
	additionalMessage?: string;
}
