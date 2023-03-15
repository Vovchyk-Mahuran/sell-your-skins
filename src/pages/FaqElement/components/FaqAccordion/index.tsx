import { FC, useEffect, useState } from 'react';

// Types
import { FaqColumn } from 'core/types/faq-column.type';

// Hooks
import { useFaq } from 'shared/hooks/useFaq';

// Components
import Accordion from 'shared/components/Accordion';
import FaqList from 'pages/FAQ/components/FaqList';

interface FaqAccordionProps {
	column: FaqColumn;
}

const FaqAccordion: FC<FaqAccordionProps> = ({ column }) => {
	const { activeElement } = useFaq();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (column.title === activeElement?.category) {
			setIsOpen(true);
		}
	}, [column.title]);

	return (
		<Accordion
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			key={column.title}
			title={column.title}
			headerIcon={column.icon}
			withArrow
			classes="faq-element__accordion"
		>
			<FaqList details={column} columnTitle="Choose a question" />
		</Accordion>
	);
};

export default FaqAccordion;
