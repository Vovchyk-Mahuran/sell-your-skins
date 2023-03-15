import { FC } from 'react';
import SVG from 'react-inlinesvg';

// Types
import { FaqColumn } from 'core/types/faq-column.type';

// Components
import FaqList from '../FaqList';

// Styles
import './index.scss';

interface FaqCardProps {
	details: FaqColumn;
}

const FaqCard: FC<FaqCardProps> = ({ details }) => {
	return (
		<div className="faq__card faq-card">
			<div className="faq-card__header">
				<div className="circle-icon">
					<SVG cacheRequests src={details.icon} />
				</div>
				<h4 className="faq-card__title">{details.title}</h4>
			</div>
			<FaqList details={details} columnTitle="Popular questions" />
		</div>
	);
};

export default FaqCard;
