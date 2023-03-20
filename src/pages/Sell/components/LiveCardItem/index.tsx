import { FC } from 'react';

// Images
import MockSkin from 'assets/img/mock-skin.png';
import Card from 'assets/icons/card.svg';

// Styles
import './index.scss';

const LiveCardItem: FC = () => {
	return (
		<>
			<div className="live-card__img">
				<img src={MockSkin} alt="skin" />
			</div>
			<div className="live-card__meta">
				<span className="live-card__price">30 $</span>
				<img src={Card} alt="payment method" className="live-card__payment" />
			</div>
		</>
	);
};

export default LiveCardItem;
