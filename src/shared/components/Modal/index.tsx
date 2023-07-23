import { FC, ReactNode, useEffect } from 'react';
import cx from 'classnames';

// Styles
import './index.scss';
import './index.media.scss';

interface ModalProps {
	isOpen?: boolean;
	children: ReactNode;
	classes?: string;
}

const Modal: FC<ModalProps> = ({ isOpen = false, children, classes }) => {
	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'unset';
	}, [isOpen]);

	return (
		<div className={cx('modal', { active: isOpen })}>
			<div className="modal__overlay">
				<div className={cx('modal__content', classes, { active: isOpen })}>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
