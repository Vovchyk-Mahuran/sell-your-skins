import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const store = configureStore({
	reducer: {
		// TODO: add reducers
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export type DispatchType = typeof store.dispatch;
export const useAppDispatch: () => DispatchType = useDispatch;

// TODO: Ucomment next lines when configure reducers
// export type StoreType = ReturnType<typeof store.getState>;
// export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;

export default store;
