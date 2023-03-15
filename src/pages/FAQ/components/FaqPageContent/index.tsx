import { FC } from 'react';

// Hooks
import { useFaq } from 'shared/hooks/useFaq';

// Components
import FaqCard from '../FaqCard';
import FaqHeader from '../FaqHeader';

// Styles
import './index.scss';
import './index.media.scss';

const FaqPageContent: FC = () => {
	const { faqColumns } = useFaq();

	return (
		<div className="faq-page__content container">
			<FaqHeader />
			<div className="faq-page__cards">
				{faqColumns.map(column => (
					<FaqCard key={column.title} details={column} />
				))}
			</div>
		</div>
	);
};

export default FaqPageContent;
