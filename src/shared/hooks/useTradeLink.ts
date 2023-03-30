import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/root';

// Selectors
import { selectorGetUser, selectorGetTradeUrlError } from 'redux/user-service/selector';

// Actions
import { setTradeUrl } from 'redux/user-service/actions';

export const useTradeLink = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectorGetUser);
	const urlError = useAppSelector(selectorGetTradeUrlError);
	const [url, setUrl] = useState<string>('');

	useEffect(() => {
		setUrl(user.trade_url);
	}, [user.trade_url]);

	const changeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUrl(e.target.value);
	};

	const updateTradeUrl = () => {
		dispatch(setTradeUrl(url));
	};

	return { urlError, url, changeUrl, updateTradeUrl };
};
