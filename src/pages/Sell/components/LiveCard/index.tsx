import { FC } from 'react';

// Components
import LiveCardOverlay from '../LiveCardOverlay';
import LiveCardItem from '../LiveCardItem';

// Styles
import './index.scss';

const LiveCard: FC = () => {
	return (
		<div className="live-card skin--red">
			<LiveCardOverlay />
			<LiveCardItem />
		</div>
	);
};

export default LiveCard;
