import { StoreType } from 'redux/root';

export const selectorGetLastSales = (store: StoreType) => store.inventoryStore.lastSoldItems;

export const selectorGetInventory = (store: StoreType) => store.inventoryStore.inventory;

export const selectorGetTransactionValue = (store: StoreType) => store.inventoryStore.transactionValue;
