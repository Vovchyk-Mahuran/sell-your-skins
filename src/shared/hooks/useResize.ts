import { useEffect, useState } from 'react';

export const useResize = (resizeHandler?: () => void, deps: any[] = []) => {
	const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

	const handleResize = () => {
		setWindowSize(prev => ({ ...prev, width: window.innerWidth, height: window.innerHeight }));
		resizeHandler?.();
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, deps);

	return { windowSize };
};
