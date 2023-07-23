import { FC } from 'react';
import SVG from 'react-inlinesvg';

// Images
import CloseIcon from 'assets/icons/close.svg';
import SuccesTradeIcon from 'assets/img/selected.webp';

// Components
import Modal from 'shared/components/Modal';

// Styles
import './index.scss';

interface SuccessTradeProps {
	isOpen: boolean;
	onClose: () => void;
}

const SuccessTrade: FC<SuccessTradeProps> = ({ isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} classes="success-trade">
			<div className="success-trade__content">
				<div className="success-trade__header">
					<SVG
						onClick={onClose}
						src={CloseIcon}
						cacheRequests
						className="success-trade__close modal__close"
					/>
				</div>
				<img className="success-trade__image" src={SuccesTradeIcon} alt="Success Trade" />
				<h2 className="success-trade__title">Trade was completed succesfully!</h2>
			</div>
		</Modal>
	);
};

export default SuccessTrade;
