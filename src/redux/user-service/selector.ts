import { StoreType } from 'redux/root';

export const selectorIsAuth = (store: StoreType) => store.userStore.isAuth;
