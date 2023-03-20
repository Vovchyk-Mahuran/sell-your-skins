import { FC } from 'react';

// Counter
import LiveSalesCounter from '../LiveSalesCounter';
import LiveCard from '../LiveCard';

// Styles
import './index.scss';

const LiveSalesLine: FC = () => {
	return (
		<section className="live-sales-line">
			<LiveSalesCounter />
			<div className="live-sales-cards">
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
				<LiveCard />
			</div>
		</section>
	);
};

export default LiveSalesLine;
