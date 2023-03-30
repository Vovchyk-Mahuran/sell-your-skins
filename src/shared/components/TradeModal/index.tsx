import { ReactNode, FC } from 'react';
import SVG from 'react-inlinesvg';

// Images
import CloseIcon from 'assets/icons/close.svg';

// Components
import Button from '../Button';
import Modal from '../Modal';
import Spinner from '../Spinner';

interface TradeModalProps {
	isOpen?: boolean;
	children: ReactNode;
	classes?: string;
	statusIcon?: string;
	modalTitle: string;
	close?: boolean;
	closeHandler?: () => void;
}
const TradeModal: FC<TradeModalProps> = ({
	isOpen,
	classes,
	statusIcon,
	modalTitle,
	close,
	closeHandler,
	children,
}) => {
	return (
		<Modal isOpen={isOpen} classes={classes}>
			<div className="modal__header">
				<div className="modal__status">
					{statusIcon ? <SVG src={statusIcon} cacheRequests /> : <Spinner />}
					<span className="modal__title">{modalTitle}</span>
				</div>
				{close && <SVG onClick={closeHandler} className="modal__close" src={CloseIcon} />}
			</div>
			<div className="modal__body">{children}</div>
			{close && (
				<div className="modal__footer">
					<Button classes="modal__btn" btnText="Go back" onClick={closeHandler} />
				</div>
			)}
		</Modal>
	);
};

export default TradeModal;
