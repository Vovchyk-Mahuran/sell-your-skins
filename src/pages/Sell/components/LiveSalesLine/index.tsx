import { FC } from 'react';
import { useAppSelector } from 'redux/root';

// Selectors
import { selectorGetLastSales } from 'redux/inventory-service/selector';

// Componets
import LiveSalesCounter from '../LiveSalesCounter';
import LiveCard from '../LiveCard';

// Styles
import './index.scss';

const LiveSalesLine: FC = () => {
	const lastSales = useAppSelector(selectorGetLastSales);

	return (
		<section className="live-sales-line">
			<LiveSalesCounter />
			<div className="live-sales-cards">
				{lastSales?.map(sale => (
					<LiveCard key={sale.id} details={sale} />
				))}
			</div>
		</section>
	);
};

export default LiveSalesLine;
