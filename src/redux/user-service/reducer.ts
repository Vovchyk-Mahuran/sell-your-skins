import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

// Constants
import { StorageKeys } from 'constants/storageKeys';

// Actions
import { createTrade, getActiveTrade, getUserData, setTradeUrl } from './actions';

// Types
import { IUserReducer } from './interface';

// Operations
import {
	getUserOperation,
	signInOperation,
	logoutOperation,
	setTradeUrlOperation,
	setTradeUrlError,
	createTradeOperation,
	getActiveTradeOperation,
	clearTradeOperation,
	updateTradeUrlErrorOperation,
} from './operations';

const initialUser = {
	avatar: '',
	id: 0,
	steam_id: '',
	trade_url: '',
	username: '',
};
const tradeInfoString = localStorage.getItem(StorageKeys.TRADE_INFO);
const tradeInfo = tradeInfoString ? JSON.parse(tradeInfoString) : null;

const initialState: IUserReducer = {
	isAuth: !!Cookies.get(StorageKeys.AUTH_TOKEN),
	user: initialUser,
	tradeUrlError: '',
	tradeInfo,
};

export const userStore = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: logoutOperation,
		clearTrade: clearTradeOperation,
		signIn: signInOperation,
		updateTradeUrlError: updateTradeUrlErrorOperation,
	},
	extraReducers: builder => {
		builder
			.addCase(getUserData.fulfilled, getUserOperation)
			.addCase(setTradeUrl.fulfilled, setTradeUrlOperation)
			.addCase(setTradeUrl.rejected, setTradeUrlError)
			.addCase(createTrade.fulfilled, createTradeOperation)
			.addCase(getActiveTrade.fulfilled, getActiveTradeOperation);
	},
});

export const { logout, clearTrade, signIn, updateTradeUrlError } = userStore.actions;
export default userStore.reducer;
