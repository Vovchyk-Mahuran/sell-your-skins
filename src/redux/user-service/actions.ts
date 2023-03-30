import axios from 'core/api/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Constants
import { API } from 'core/api/entity.api';

// Action-Types
import {
	USER_CRETE_TRADE,
	USER_GET_ACTIVE_TRADE,
	USER_GET_DATA,
	USER_SET_TRADE_URL,
	USER_SIGN_IN,
} from 'redux/action-types';

export const signIn = createAsyncThunk(USER_SIGN_IN, async () => {
	const { data } = await axios.get(API.AUTH_STEAM);
	return data;
});

export const getUserData = createAsyncThunk(USER_GET_DATA, async () => {
	const { data } = await axios.get(API.GET_USER);
	return data;
});

export const setTradeUrl = createAsyncThunk(USER_SET_TRADE_URL, async (tradeUrl: string) => {
	try {
		const { data } = await axios.put(API.SET_TRADE_URL, { trade_url: tradeUrl });
		return data;
	} catch (error) {
		throw new Error(error.data.message);
	}
});

export const createTrade = createAsyncThunk(USER_CRETE_TRADE, async (tradeDTO: any) => {
	try {
		const { data } = await axios.post(API.CREATE_TRADE, tradeDTO).then(
			await new Promise(reslove => {
				setTimeout(reslove, 3000);
			})
		);
		return data;
	} catch (error) {
		return error;
	}
});

export const getActiveTrade = createAsyncThunk(USER_GET_ACTIVE_TRADE, async (id: string) => {
	const { data } = await axios.get(API.GET_ACTIVE_TRADE(id));
	return data;
});
