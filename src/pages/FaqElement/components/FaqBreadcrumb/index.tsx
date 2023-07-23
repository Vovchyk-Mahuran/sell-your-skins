import { FC } from 'react';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';

// Constants
import { ROUTERS } from 'constants/routers';

// Hooks
import { useFaq } from 'shared/hooks/useFaq';

// Images
import Arrow from 'assets/icons/arrow.svg';

// Styles
import './index.scss';

const FaqBreadcrumb: FC = () => {
	const { activeElement } = useFaq();

	return (
		<div className="faq-active__header">
			<ul className="faq-active__breadcrumb faq-breadcrumb">
				<li className="faq-breadcrumb__category">
					<Link to={ROUTERS.FAQ}>{activeElement?.category}</Link>
				</li>
				<SVG src={Arrow} cacheRequests className="faq-breadcrumb__separator" />
				<li className="faq-breadcrumb__title">
					<Link className="faq-breadcrumb__link" to=" ">
						{activeElement?.title}
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default FaqBreadcrumb;
