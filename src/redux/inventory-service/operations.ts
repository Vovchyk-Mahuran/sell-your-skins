import { PayloadAction } from '@reduxjs/toolkit';

// Types
import { inventoryResponseDTO } from 'core/dto/inventoryResponse.dto';
import { inventoryItemResponseDTO } from 'core/dto/inventoryItemResponse.dto';
import { InventoryReducer } from './interface';

export const lastSoldOperation = (state: InventoryReducer, { payload }: PayloadAction<any>) => {
	return { ...state, lastSoldItems: payload };
};

export const getInventoryOperation = (state: InventoryReducer, { payload }: PayloadAction<inventoryResponseDTO>) => {
	return { ...state, inventory: payload.items, transactionValue: payload.selected };
};

export const selectInventoryOperation = (
	state: InventoryReducer,
	{ payload }: PayloadAction<inventoryItemResponseDTO>
) => {
	const inventory = state.inventory.map(item => (item.id === payload.item.id ? payload.item : item));
	return { ...state, inventory, transactionValue: payload.selected };
};
