import { FC } from 'react';

// Hooks
import { useFaq } from 'shared/hooks/useFaq';

// Components
import FaqAccordion from '../FaqAccordion';

const FaqAccordionsWrapper: FC = () => {
	const { faqColumns } = useFaq();

	return (
		<div className="faq-element__accordions accordions-wrapper">
			{faqColumns.map(column => (
				<FaqAccordion key={column.title} column={column} />
			))}
		</div>
	);
};

export default FaqAccordionsWrapper;
