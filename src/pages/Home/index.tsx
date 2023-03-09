import { FC } from 'react';

// Components
import Header from 'pages/Header';
import Banner from './components/Banner';
import PaymentSystems from './components/PaymentSystems';

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
		<div />
	</div>
);

export default Home;
