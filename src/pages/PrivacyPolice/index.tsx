import { FC } from 'react';
import { Link } from 'react-router-dom';

// Components
import { ROUTERS } from 'constants/routers';

// Components
import Layout from 'shared/components/Layout';

// Styles
import './index.scss';

const PrivacyPolice: FC = () => {
	return (
		<section className="privacy-police">
			<Layout classes="container privacy-container">
				<h3 className="privacy__title">
					<Link className="marked" to={ROUTERS.HOME}>
						SKINSDEALS.COM
					</Link>{' '}
					WEBSITE PRIVACY POLICY
				</h3>
				<h3 className="privacy__date">LAST UPDATED: 21.04.2023</h3>
				<section id="section1" className="privacy-section">
					<h3 className="privacy-section__title">SECTION 1. PURPOSE OF THIS POLICY</h3>
					<p className="privacy-section__description">
						At{' '}
						<Link to={ROUTERS.HOME} className="marked">
							SkinsDeals.com
						</Link>
						, we are committed to protecting your privacy and ensuring the security of your personal
						information. Please read this Privacy Policy carefully to understand your rights in relation to
						your information, including how your information will be collected, stored, used, and processed.
					</p>
					<p className="privacy-section__description">
						In providing you with our website, we naturally collect information about you. This Privacy
						Policy sets out what we collect, how we store and use that information, who we might share it
						with, and the steps we take to ensure that it stays private and secure
					</p>
					<p className="privacy-section__description">
						This Privacy Policy is an integral part of the SkinsDeals.com Website{' '}
						<Link to={ROUTERS.TERMS_OF_USE} className="marked">
							Terms of Use
						</Link>
						, which are available on our website. The terms and definitions referred to in this Privacy
						Policy are specified in the SkinsDeals.com Website{' '}
						<Link to={ROUTERS.TERMS_OF_USE} className="marked">
							Terms of Use
						</Link>
						.
					</p>
					<p className="privacy-section__description">
						By using our website, you acknowledge that you have read, understood, and accepted the
						information described in this Privacy Policy. If you do not agree with this Privacy Policy or
						any part of it, you should not access or use our website.
					</p>
					<p className="privacy-section__description">
						If you agree with this Privacy Policy, you must click on the respective button provided to you.
					</p>
				</section>
				<section id="section2" className="privacy-section">
					<h3 className="privacy-section__title">
						SECTION 2. COLLECTION, PROCESSING, AND USE OF YOUR INFORMATION
					</h3>
					<h4 className="privacy-section__subtitle">
						2.1. Information Collected When You Access the Website
					</h4>
					<p className="privacy-section__description">
						When you visit{' '}
						<Link to={ROUTERS.HOME} className="marked">
							SkinsDeals.com
						</Link>
						, we collect information sent by your device, such as your IP address, device information,
						mobile network information, and standard web information. We collect this information to
						administer and personalize our website for you, analyze trends and activity, and prevent illegal
						activities.
					</p>
					<p className="privacy-section__description">
						We may place small data files called cookies on your device to recognize you as our user,
						customize our website, and monitor usage. See{' '}
						<Link to="#section3" className="marked">
							Section 3
						</Link>{' '}
						of this Privacy Policy for more information.
					</p>
					<h4 className="privacy-section__subtitle">2.2. Information Collected When You Use the Website</h4>
					<p className="privacy-section__description">
						When you log in to{' '}
						<Link to={ROUTERS.HOME} className="marked">
							SkinsDeals.com
						</Link>{' '}
						through your Steam account, we collect your name, email, and Steam unique numeric identifier to
						verify your identity, administer our website, and personalize our services for you. We may
						access information about your Steam Account to provide services to you and communicate with you
						about our products, services, and other news.
					</p>
					<p className="privacy-section__description">
						We will not share your Steam login credentials with third parties.
					</p>
					<h4 className="privacy-section__subtitle">2.3. Information We May Request for Transactions</h4>
					<p className="privacy-section__description">
						In certain situations, we may require additional information to perform transactions on the
						website. This information may include:
					</p>
					<ul className="privacy-section__list privacy-list">
						<li className="privacy-list__item">Your name and date of birth</li>
						<li className="privacy-list__item">Your phone number and social media profile</li>
						<li className="privacy-list__item">
							Your previous transaction history and payment information
						</li>
						<li className="privacy-list__item">Copies of your ID and a photo of you holding your ID</li>
					</ul>
					<p className="privacy-section__description">
						We collect this information to verify your identity, prevent fraud, and ensure compliance with
						international anti-money laundering and KYC rules. We may use your personal data to detect and
						prevent fraudulent transactions, develop new products and services, and verify compliance with
						our website terms of use. If you do not provide the requested information, you may not be able
						to use the website properly. We reserve the right to refuse access to our service if we have
						doubts about the validity or authenticity of any personal data you provide.
					</p>
					<h4 className="privacy-section__subtitle">2.4. Location Data</h4>
					<p className="privacy-section__description">
						If you use a location-enabled device to access our website, we may collect your geographical
						location data or use sensor data from your device to determine your location.
					</p>
					<h4 className="privacy-section__subtitle">2.5. Notice to Parents</h4>
					<p className="privacy-section__description">
						We do not knowingly collect personal information from anyone under the age of 13. Parents can
						contact us if they have concerns about their children&apos;s personal information being
						transferred online. Contact details can be found in the &quot;Contact&quot; section of this
						privacy policy.
					</p>
				</section>
				<section id="section3" className="privacy-section">
					<h3 className="privacy-section__title">SECTION 3. COOKIES</h3>
					<p className="privacy-section__description">
						In order to enhance your experience using the Website, we may use Cookies and other similar
						technologies such as web beacons and Flash cookies. Cookies are small text files that websites
						place on your computer when you visit them. They help websites work more efficiently and deliver
						a better and personalized service.
					</p>
					<p className="privacy-section__description">
						Cookies may be &quot;persistent&quot; or &quot;session&quot; Cookies. Persistent cookies are
						stored by your browser until their set expiry date, while session cookies expire at the end of
						your user session when the web browser is closed.
					</p>
					<p className="privacy-section__description">
						We use different types of Cookies including strictly necessary Cookies, analytical/performance
						Cookies, and functionality Cookies. Strictly necessary Cookies are required for the operation of
						the Website, analytical/performance Cookies allow us to count the number of Users and improve
						the way the Website works, and functionality Cookies recognize you when you return to the
						Website and personalize the content for you.
					</p>
					<p className="privacy-section__description">
						You can manage the use of Cookies within your internet browser&apos;s settings, and more
						information about Cookies and how to manage them can be found at{' '}
						<Link className="marked" target="_blank" to="http://www.allaboutcookies.org/">
							http://www.allaboutcookies.org/
						</Link>
						. Please note that rejecting or deleting certain Cookies may impair the performance of related
						features and functions of Our Website and services.
					</p>
				</section>
			</Layout>
		</section>
	);
};

export default PrivacyPolice;
