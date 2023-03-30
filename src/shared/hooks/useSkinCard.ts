import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/root';

// Hooks
import { useSkinsStyles } from 'shared/hooks/useSkinsStyles';

// Selector
import { selectorIsAuth } from 'redux/user-service/selector';

// Actions
import { selectInventoryItem } from 'redux/inventory-service/actions';

// Types
import { Skin } from 'core/types/skin.type';

export const useSkinCard = (skin: Skin) => {
	const dispatch = useAppDispatch();
	const isAuth = useAppSelector(selectorIsAuth);
	const { skinStyles } = useSkinsStyles(skin.name_color);

	const isSkinTradable = useMemo(() => skin.price && skin.tradable, [skin]);
	const isBlocked = useMemo(() => !isSkinTradable && isAuth, [isAuth, isSkinTradable]);
	const isSelected = useMemo(() => skin.selected, [skin.selected]);

	const selectItem = () => {
		if (isSkinTradable) {
			dispatch(selectInventoryItem({ appId: skin.app_id, itemId: skin.id }));
		}
	};

	return { skinStyles, isSkinTradable, isBlocked, isSelected, selectItem };
};
