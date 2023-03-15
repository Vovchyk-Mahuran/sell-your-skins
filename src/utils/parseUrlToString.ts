export const parseUrlToString = (value: string, separator: string = '-') => {
	return value
		.replace(/_/g, '.')
		.replace(new RegExp(separator, 'g'), ' ')
		.replace(/_/g, '.')
		.replace(/qm/g, '?')
		.replace('=', '/')
		.replace(/e\smails/gi, 'e-mails');
};
