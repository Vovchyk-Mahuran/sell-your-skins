import { FC, useEffect, useRef } from 'react';

// Hooks
import { useFaq } from 'shared/hooks/useFaq';

// Components
import FaqBreadcrumb from '../FaqBreadcrumb';

// Styles
import './index.scss';
import './index.media.scss';

const FaqActiveElement: FC = () => {
	const content = useRef<HTMLDivElement>(null);
	const { activeElement } = useFaq();

	useEffect(() => {
		if (content.current && activeElement) {
			content.current.innerHTML = activeElement.content;
		}

		return () => {
			if (content.current && activeElement) {
				content.current.innerHTML = '';
			}
		};
	}, [content.current, activeElement]);

	return (
		<div className="faq-element__active faq-active">
			<FaqBreadcrumb />
			<div className="faq-active__content">
				<h3 className="faq-active__title">{activeElement?.title}</h3>
				<div className="faq-active__description" ref={content} />
			</div>
		</div>
	);
};

export default FaqActiveElement;
