import { FC, useRef, ReactNode, useEffect } from 'react';
import cx from 'classnames';
import SVG from 'react-inlinesvg';

// Images
import Arrow from 'assets/icons/arrow.svg';

// Styles
import './index.scss';

interface AccordionProps {
	classes?: string;
	title: string;
	content?: string;
	children?: ReactNode;
	isOpen?: boolean;
	setIsOpen?: (value: boolean) => void;
	id?: string;
	toggleSelected?: (id: string) => void;
	withArrow?: boolean;
	headerIcon?: string;
}

const Accordion: FC<AccordionProps> = ({
	classes,
	title,
	content,
	children,
	id,
	isOpen = false,
	setIsOpen,
	toggleSelected,
	withArrow = false,
	headerIcon,
}) => {
	const accordionContentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (accordionContentRef.current && content) {
			accordionContentRef.current.innerHTML = content;
		}
	}, []);

	const handleClick = (id?: string) => {
		if (id) return toggleSelected?.(id);
		return setIsOpen?.(!isOpen);
	};

	return (
		<div className={cx('accordion', classes)}>
			<h2 className="accordion__header">
				<button
					onClick={() => handleClick(id)}
					className={cx('accordion__button', { collapsed: isOpen })}
					type="button"
				>
					{headerIcon ? (
						<>
							<SVG src={headerIcon} /> {title}
						</>
					) : (
						title
					)}
				</button>
				{withArrow && (
					<button type="button" className={cx('accordion__arrow', { collapsed: isOpen })}>
						<img src={Arrow} alt="Arrow" />
					</button>
				)}
			</h2>
			<div ref={accordionContentRef} className={cx('accordion__body', { collapsed: isOpen })}>
				{children}
			</div>
		</div>
	);
};

export default Accordion;
