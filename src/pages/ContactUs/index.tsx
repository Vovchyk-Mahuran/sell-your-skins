import { FC } from 'react';
import Layout from 'shared/components/Layout';

const ContactUs: FC = () => {
	return (
		<section className="contact-us">
			<Layout classes="container">
				<p>
					If you have any questions, comments, or concerns about our website, please feel free to get in touch
					with us using any of the methods below. We appreciate your feedback and are committed to providing
					the best possible user experience for our visitors.
				</p>
				Email: <a href="mailto:support@skinsdeals.com">support@skinsdeals.com</a>
				<p>
					You can also reach out to us through our 24/7 online chat service, available on our website. Our
					customer support representatives are always available to assist you with any questions or issues you
					may have.
				</p>
			</Layout>
		</section>
	);
};

export default ContactUs;
