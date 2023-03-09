import { FC } from 'react';

// Components
import SkinsCardList from '../SkinsCardList';

// Styles
import './index.scss';

const LiveSales: FC = () => (
	<div className="container">
		<h4 className="live-sales__title">
			Live Sales on <span className="marked">SellYourSkins.com</span>
		</h4>
		<SkinsCardList />
	</div>
);

export default LiveSales;
