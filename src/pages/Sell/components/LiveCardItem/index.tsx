import { FC } from 'react';

// Images
import MockSkin from 'assets/img/mock-skin.png';

// Types
import { LastSale } from 'core/types/last-sale.type';

// Styles
import './index.scss';

interface LiveCardItemProps {
	details: LastSale;
}

const LiveCardItem: FC<LiveCardItemProps> = ({ details }) => {
	return (
		<>
			<div className="live-card__img">
				<img src={details.image || MockSkin} alt="skin" />
			</div>
			<div className="live-card__meta">
				<span className="live-card__price">{details.price} $</span>
			</div>
		</>
	);
};

export default LiveCardItem;
