import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import userStore from './user-service/reducer';

const store = configureStore({
	reducer: {
		userStore,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export type StoreType = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;

export const useAppDispatch: () => DispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;

export default store;
