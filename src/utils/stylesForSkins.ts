import { convertHexToRgba } from './convertHexToRgba';

export const stylesForSkins = (color: string) => {
	return {
		backgroundImage: convertHexToRgba(color),
		boxShadow: `0 3px 0 #${color}`,
	};
};
