import { PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

// Constants
import { StorageKeys } from 'constants/storageKeys';

// Types
import { User } from 'core/types/user.type';
import { TradeInfo } from 'core/types/trade-info';
import { IUserReducer } from './interface';

export const signInOperation = (state: IUserReducer) => {
	return { ...state, isAuth: true };
};

export const getUserOperation = (state: IUserReducer, { payload }: PayloadAction<any>) => {
	return { ...state, user: payload };
};

export const logoutOperation = (state: IUserReducer) => {
	Cookies.remove(StorageKeys.AUTH_TOKEN);
	localStorage.clear();
	return { ...state, isAuth: false };
};

export const setTradeUrlOperation = (state: IUserReducer, { payload }: PayloadAction<User>) => {
	return { ...state, tradeUrlError: '', user: { ...state.user, ...payload } };
};

export const setTradeUrlError = (state: IUserReducer, { error }: any) => {
	return { ...state, tradeUrlError: error.message };
};

export const createTradeOperation = (state: IUserReducer, { payload }: PayloadAction<TradeInfo | any>) => {
	return { ...state, tradeInfo: payload };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getActiveTradeOperation = (state: IUserReducer, { payload }: PayloadAction<TradeInfo>) => {
	return { ...state, tradeInfo: { ...state.tradeInfo, status: 'accepted' } };
};

export const clearTradeOperation = (state: IUserReducer) => {
	localStorage.removeItem(StorageKeys.TRADE_INFO);
	return { ...state, tradeInfo: null };
};
