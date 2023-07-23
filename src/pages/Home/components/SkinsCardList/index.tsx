import { FC, useMemo } from 'react';
import { useAppSelector } from 'redux/root';

// Selectors
import { selectorGetLastSales } from 'redux/inventory-service/selector';

// Components
import SkinsList from 'shared/components/SkinsList';

const SkinsCardList: FC = () => {
	const lastSales = useAppSelector(selectorGetLastSales);
	const skins = useMemo(() => lastSales?.slice(0, 7), [lastSales]);

	return <SkinsList skins={skins} classes="live-sales__skins-list skins__list" />;
};

export default SkinsCardList;
