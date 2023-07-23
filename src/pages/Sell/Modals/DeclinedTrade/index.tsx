import { FC } from 'react';
import SVG from 'react-inlinesvg';

// Images
import CloseIcon from 'assets/icons/close.svg';
import DeclineTradeIcon from 'assets/icons/cancel.svg';

// Components
import Modal from 'shared/components/Modal';

// Styles
import './index.scss';

interface DeclinedTradeProps {
	isOpen: boolean;
	onClose: () => void;
}

const DeclinedTrade: FC<DeclinedTradeProps> = ({ isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} classes="declined-trade">
			<div className="declined-trade__content">
				<div className="declined-trade__header">
					<SVG
						onClick={onClose}
						src={CloseIcon}
						cacheRequests
						className="declined-trade__close modal__close"
					/>
				</div>
				<img className="declined-trade__image" src={DeclineTradeIcon} alt="Declined Trade" />
				<h2 className="declined-trade__title">Trade was declined!</h2>
			</div>
		</Modal>
	);
};

export default DeclinedTrade;
