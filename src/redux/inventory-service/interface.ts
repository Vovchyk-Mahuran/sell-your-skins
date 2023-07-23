import { LastSale } from 'core/types/last-sale.type';
import { Skin } from 'core/types/skin.type';

export interface InventoryReducer {
	lastSoldItems: LastSale[];
	inventory: Skin[];
	transactionValue: number;
}
