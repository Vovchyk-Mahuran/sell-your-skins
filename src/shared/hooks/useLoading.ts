import { AsyncThunkAction } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useAppDispatch } from 'redux/root';

export const useLoading = () => {
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const startLoading = async (action: AsyncThunkAction<any, any, any>) => {
		setIsLoading(true);
		return dispatch(action)
			.unwrap()
			.finally(() => setIsLoading(false));
	};

	return { isLoading, startLoading, setIsLoading };
};
