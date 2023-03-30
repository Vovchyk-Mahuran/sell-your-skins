import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { initInterceptor } from 'core/api/axios';

import userStore from './user-service/reducer';
import inventoryStore from './inventory-service/reducer';

const store = configureStore({
	reducer: {
		userStore,
		inventoryStore,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export type StoreType = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;

export const useAppDispatch: () => DispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;

initInterceptor(store);

export default store;
