import { FC } from 'react';

// Components
import Layout from 'shared/components/Layout';
import FaqPageContent from './components/FaqPageContent';

const Faq: FC = () => (
	<div className="faq-page h-full">
		<Layout>
			<FaqPageContent />
		</Layout>
	</div>
);

export default Faq;
