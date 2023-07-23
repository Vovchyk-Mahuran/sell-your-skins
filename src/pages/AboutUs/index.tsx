import { FC } from 'react';
import { Link } from 'react-router-dom';

// Components
import Layout from 'shared/components/Layout';

// Styles
import './index.scss';

const AboutUs: FC = () => {
	return (
		<section className="about-us">
			<Layout classes="container about-us__container">
				<h2 className="about-us__title">About Us</h2>
				<p className="about-us__details">
					Welcome to SkinsDeals.com, the premier online destination for instant selling skins for your
					favorite video games. Our team is dedicated to providing the best possible service to our customers,
					and we strive to make your experience with us as seamless and enjoyable as possible.
				</p>
				<p className="about-us__details">
					At SkinsDeals.com, we understand the importance of staying up to date with the latest trends in the
					gaming industry. Our algorithms constantly analyze prices on all marketplaces, allowing us to find
					the most advantageous cash flows and create the best possible conditions and prices for you. Our
					expert team of traders monitors the market 24/7 to ensure that we always offer the most competitive
					prices for buying and selling skins.
				</p>
				<p className="about-us__details">
					We pride ourselves on offering a wide selection of CS:GO skins. Our user-friendly website makes it
					easy to browse our inventory, sell items securely, and track your orders.
				</p>
				<p className="about-us__details">
					In addition to our commitment to providing the best possible service, we also prioritize the
					security and privacy of our customers. Our website is protected by advanced encryption technology,
					and we take great care to ensure that all transactions are processed securely and confidentially.
				</p>
				<p className="about-us__details">
					At SkinsDeals.com, we are passionate about gaming and dedicated to providing our customers with the
					best possible experience. Whether you are a seasoned gamer or just getting started, we are here to
					help you find the perfect skins to enhance your gaming experience. Thank you for choosing
					SkinsDeals.com, and we look forward to serving you!
				</p>

				<p className="about-us__info">
					Always happy to see your suggestions on{' '}
					<Link to="mailto:support@skinsdeals.com" className="marked">
						support@skinsdeals.com
					</Link>
				</p>
			</Layout>
		</section>
	);
};

export default AboutUs;
