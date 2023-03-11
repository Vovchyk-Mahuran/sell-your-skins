import { FC, useRef, ReactNode, useEffect } from 'react';
import cx from 'classnames';

// Styles
import './index.scss';

interface AccordionProps {
	classes?: string;
	title: string;
	content?: string;
	children?: ReactNode;
	isOpen?: boolean;
	id: string;
	toggleSelected: (id: string) => void;
}

const Accordion: FC<AccordionProps> = ({ classes, title, content, children, id, isOpen = false, toggleSelected }) => {
	const accordionContentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (accordionContentRef.current && content) {
			accordionContentRef.current.innerHTML = content;
		}
	}, []);

	return (
		<div className={cx('accordion', classes)}>
			<h2 className="accordion__header">
				<button
					onClick={() => toggleSelected(id)}
					className={cx('accordion__button', { collapsed: isOpen })}
					type="button"
				>
					{title}
				</button>
			</h2>
			<div ref={accordionContentRef} className={cx('accordion__body', { collapsed: isOpen })}>
				{children}
			</div>
		</div>
	);
};

export default Accordion;
