import { FC } from 'react';

// Components
import Header from 'pages/Header';
import Banner from './components/Banner';
import PaymentSystems from './components/PaymentSystems';
import Manual from './components/Manual';

// Styles
import './index.scss';
import LiveSales from './components/LiveSales';

const Home: FC = () => (
	<div className="home">
		<section className="home__banner-section">
			<Header />
			<Banner />
		</section>
		<section className="home__payment-systems">
			<PaymentSystems />
		</section>

		<section className="home__live-sales live-sales">
			<LiveSales />
		</section>

		<Manual />
		<div />
	</div>
);

export default Home;
