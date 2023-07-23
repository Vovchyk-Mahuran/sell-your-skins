import { FC } from 'react';

// Components
import Layout from 'shared/components/Layout';
import TermsList from './components/TermsList';

// Styles
import './index.scss';

const TermsOfUse: FC = () => {
	return (
		<section className="terms">
			<Layout classes="terms__container container">
				<h2 className="terms__title">Terms of Use</h2>
				<p className="terms__description">
					Welcome to skinsdeals.com! These terms and conditions (&quot;Terms&quot;) apply to your use of the
					skinsdeals.com website (the &quot;Website&quot;) and all products, services and content available
					through the Website (collectively, the &quot;Service&quot;). Please read these Terms carefully
					before using the Service.
				</p>
				<TermsList />
				<p className="terms__description">
					Thank you for taking the time to read our Terms of Use. We hope you enjoy using skinsdeals.com
				</p>
			</Layout>
		</section>
	);
};

export default TermsOfUse;
