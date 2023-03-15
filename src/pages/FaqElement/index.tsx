import { FC } from 'react';

// Components
import Layout from 'shared/components/Layout';
import FaqHeader from 'pages/FAQ/components/FaqHeader';
import FaqElementContent from './components/FaqElementContent';

// Styles
import './index.scss';
import './index.media.scss';

const FaqElement: FC = () => {
	return (
		<div className="faq-element">
			<Layout>
				<div className="faq-element__content container">
					<FaqHeader />
					<FaqElementContent />
				</div>
			</Layout>
		</div>
	);
};

export default FaqElement;
