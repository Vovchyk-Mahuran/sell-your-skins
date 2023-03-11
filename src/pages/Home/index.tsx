import { FC } from 'react';

// Components
import Header from 'pages/Header';
import Footer from 'pages/Footer';
import Banner from './components/Banner';
import PaymentSystems from './components/PaymentSystems';
import Manual from './components/Manual';
import LiveSales from './components/LiveSales';
import TrustPilot from './components/TrustPilot';
import FAQ from './components/FAQ';

// Styles
import './index.scss';

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
		<TrustPilot />
		<FAQ />
		<Footer />
		<div />
	</div>
);

export default Home;
