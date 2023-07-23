import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/root';

// Selectors
import { selectorGetUser, selectorGetTradeUrlError } from 'redux/user-service/selector';

// Actions
import { setTradeUrl } from 'redux/user-service/actions';
import { updateTradeUrlError } from 'redux/user-service/reducer';

// Hooks
import { useLoading } from './useLoading';

export const useTradeLink = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectorGetUser);
	const urlError = useAppSelector(selectorGetTradeUrlError);
	const [url, setUrl] = useState<string>('');
	const { isLoading, startLoading } = useLoading();

	useEffect(() => {
		if (user.trade_url) {
			setUrl(user.trade_url);
			dispatch(updateTradeUrlError(''));
		} else if (user.id && !user.trade_url) {
			dispatch(updateTradeUrlError('Trade Url missing'));
		}
	}, [user]);

	const changeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUrl(e.target.value);
	};

	const updateTradeUrl = ({ url }: { url: string }) => {
		if (!isLoading && url) {
			startLoading(setTradeUrl(url));
		}
	};
	return { urlError, url, changeUrl, updateTradeUrl, isLoading };
};
