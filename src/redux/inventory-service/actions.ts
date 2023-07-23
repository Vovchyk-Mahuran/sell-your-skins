import axios from 'core/api/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Constants
import { API } from 'core/api/entity.api';

// Action-Types
import { INVENTORY_GET_INVENTORY, INVENTORY_LAST_SOLD_ITEMS, INVENTORY_SELECT_ITEM } from 'redux/action-types';
import { SelectItemDTO } from 'core/dto/selectItem.dto';

export const getLastSoldItems = createAsyncThunk(INVENTORY_LAST_SOLD_ITEMS, async () => {
	try {
		const { data } = await axios.get(API.LIVE_DEALS);
		return data;
	} catch (error) {
		return null;
	}
});

export const getInventory = createAsyncThunk(INVENTORY_GET_INVENTORY, async (appId: string = '730') => {
	const { data } = await axios.get(API.GET_INVENTORY(appId)).then(
		await new Promise(resolve => {
			setTimeout(resolve, 1000);
		})
	);
	return data;
});

export const selectInventoryItem = createAsyncThunk(
	INVENTORY_SELECT_ITEM,
	async ({ appId = '730', itemId }: SelectItemDTO) => {
		const { data } = await axios.put(API.SELECT_ITEM(appId, itemId));
		return data;
	}
);
