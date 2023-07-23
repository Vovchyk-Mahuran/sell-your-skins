import { FC } from 'react';

// Components
import Layout from 'shared/components/Layout';
import LiveSalesLine from './components/LiveSalesLine';
import MySkins from './components/MySkins';

// Styles
import './index.scss';

const Sell: FC = () => {
	return (
		<div className="sell">
			<Layout>
				<LiveSalesLine />
				<MySkins />
			</Layout>
		</div>
	);
};

export default Sell;
