import { TUTORIALS_DATA } from 'constants/tutorials';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { parseUrlToString } from 'utils/parseUrlToString';

export const useTutorialItem = () => {
	const { title } = useParams();

	const activeElement = useMemo(() => {
		return TUTORIALS_DATA.find(tutorial => tutorial.title === parseUrlToString(title || ''));
	}, [title]);

	return { activeElement };
};
