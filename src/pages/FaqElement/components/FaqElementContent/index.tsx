import { FC } from 'react';

// Hooks
import { useFaq } from 'shared/hooks/useFaq';

// Components
import FaqAccordionsWrapper from '../FaqAccordionsWrapper';
import FaqActiveElement from '../FaqActiveElement';

const FaqElementContent: FC = () => {
	const { activeElement } = useFaq();

	if (!activeElement) return null;

	return (
		<div className="faq-element__details">
			<FaqAccordionsWrapper />
			<FaqActiveElement />
		</div>
	);
};

export default FaqElementContent;
