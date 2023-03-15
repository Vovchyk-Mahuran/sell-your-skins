export const parseStringToUrl = (value: string, separator: string = '-') => {
	return value.replace(/\?/g, 'qm').replace(/\./g, '_').replace(/\s+/g, separator).replace('/', '=');
};
