import { FC } from 'react';
import { Link } from 'react-router-dom';

// Types
import { FaqColumn } from 'core/types/faq-column.type';

// Hooks
import { useFaq } from 'shared/hooks/useFaq';

// Types
import './index.scss';

interface FaqListProps {
	details: FaqColumn;
	columnTitle: string;
}

const FaqList: FC<FaqListProps> = ({ details, columnTitle }) => {
	const { getFaqLink } = useFaq();

	return (
		<div className="faq-card__content">
			<h6 className="faq-card__popular">{columnTitle}</h6>
			<ul className="faq-card__list faq-list">
				{details.links.map(link => (
					<li key={link.id} className="faq-list__item">
						<Link className="faq-list__link" to={getFaqLink(link.title)}>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FaqList;
