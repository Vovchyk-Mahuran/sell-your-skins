import { FC, useMemo } from 'react';
import { useAppSelector } from 'redux/root';

// Selectors
import { selectorGetLastSales } from 'redux/inventory-service/selector';

// Components
import Online from 'shared/components/Online';

// Styles
import './index.scss';

const LiveSalesCounter: FC = () => {
	const lastSales = useAppSelector(selectorGetLastSales);
	const salesLength = useMemo(() => lastSales?.length || 0, [lastSales?.length]);

	return (
		<div className="live-sales__counter live-counter">
			<div className="live-counter__pulse">
				<Online />
				<h5 className="live-counter__title">Live Sales</h5>
			</div>
			<p className="live-counter__description">Number of items sold: </p>
			<span className="live-counter__amount">{14551 + salesLength}</span>
		</div>
	);
};

export default LiveSalesCounter;
