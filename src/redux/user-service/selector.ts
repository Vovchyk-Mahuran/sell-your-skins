import { StoreType } from 'redux/root';

export const selectorIsAuth = (store: StoreType) => store.userStore.isAuth;

export const selectorGetTradeUrl = (store: StoreType) => store.userStore.user.trade_url;

export const selectorGetTradeUrlError = (store: StoreType) => store.userStore.tradeUrlError;

export const selectorGetUser = (store: StoreType) => store.userStore.user;

export const selectorGetTradeinfo = (store: StoreType) => store.userStore.tradeInfo;
