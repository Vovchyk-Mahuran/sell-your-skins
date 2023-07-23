import { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from 'redux/root';

// Constants
import { LAPTOP, LAPTOP_SM, MOBILE_SM, TABLET_LG, TABLET_SM } from 'constants/windowSIze';

// Selectors
import { selectorGetInventory } from 'redux/inventory-service/selector';

// Actions
import { getInventory } from 'redux/inventory-service/actions';

// Hooks
import { useResize } from 'shared/hooks/useResize';
import { useLoading } from './useLoading';

export const useEquipmentPage = () => {
	const { windowSize } = useResize();
	const { isLoading, startLoading } = useLoading();

	useEffect(() => {
		startLoading(getInventory());
	}, []);

	const inventory = useAppSelector(selectorGetInventory);

	const [page, setPage] = useState<number>(1);

	const itemsPerPage = useMemo(() => {
		setPage(1);
		switch (true) {
			case windowSize.width > LAPTOP || (windowSize.width <= LAPTOP_SM && windowSize.width >= TABLET_LG):
				return 15;
			case windowSize.width > TABLET_LG && windowSize.width <= LAPTOP:
				return 12;
			case windowSize.width < TABLET_LG && windowSize.width > TABLET_SM:
				return 8;
			case windowSize.width <= TABLET_SM && windowSize.width >= MOBILE_SM:
				return 6;
			default:
				return 3;
		}
	}, [windowSize.width]);

	const displayedItems = useMemo(() => {
		const firstIndex = (page - 1) * itemsPerPage;
		const lastIndex = firstIndex + itemsPerPage;
		return inventory.slice(firstIndex, lastIndex);
	}, [page, itemsPerPage, inventory]);

	const changePage = (index: number) => {
		setPage(index);
	};

	return { displayedItems, changePage, inventory, page, itemsPerPage, isLoading };
};
