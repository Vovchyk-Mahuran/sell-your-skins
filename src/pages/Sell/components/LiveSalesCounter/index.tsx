import { FC } from 'react';

// Components
import Online from 'shared/components/Online';

// Styles
import './index.scss';

const LiveSalesCounter: FC = () => {
	return (
		<div className="live-sales__counter live-counter">
			<div className="live-counter__pulse">
				<Online />
				<h5 className="live-counter__title">Live Sales</h5>
			</div>
			<p className="live-counter__description">Number of items sold: </p>
			<span className="live-counter__amount">90</span>
		</div>
	);
};

export default LiveSalesCounter;
