import { createSlice } from '@reduxjs/toolkit';

// Actions
import { getLastSoldItems, getInventory, selectInventoryItem } from './actions';

// Types
import { InventoryReducer } from './interface';

// Operations
import { lastSoldOperation, getInventoryOperation, selectInventoryOperation } from './operations';

const initialState: InventoryReducer = {
	lastSoldItems: [],
	inventory: [],
	transactionValue: 0,
};

export const inventoryStore = createSlice({
	name: 'inventory',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getLastSoldItems.fulfilled, lastSoldOperation)
			.addCase(getInventory.fulfilled, getInventoryOperation)
			.addCase(selectInventoryItem.fulfilled, selectInventoryOperation);
	},
});

export default inventoryStore.reducer;
