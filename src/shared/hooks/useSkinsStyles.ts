import { useMemo } from 'react';
import { stylesForSkins } from 'utils/stylesForSkins';

export const useSkinsStyles = (color: string) => {
	const skinStyles = useMemo(() => {
		return stylesForSkins(color);
	}, [color]);

	return { skinStyles };
};
