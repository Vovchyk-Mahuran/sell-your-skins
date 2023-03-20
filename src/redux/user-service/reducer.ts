import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuth: false,
};

export const userStore = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: state => ({ ...state, isAuth: true }),
		logout: state => ({ ...state, isAuth: false }),
	},
});

export const { login, logout } = userStore.actions;
export default userStore.reducer;
