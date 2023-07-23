import { FC } from 'react';

// Componets
import TradeModal from 'shared/components/TradeModal';
import Spinner from 'shared/components/Spinner';

// Styles
import './index.scss';

interface ProcessingTradeModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const ProcessingTradeModal: FC<ProcessingTradeModalProps> = ({ isOpen, onClose }) => {
	return (
		<TradeModal
			closeHandler={onClose}
			isOpen={isOpen}
			modalTitle="Sending in progress..."
			classes="processing-modal"
			close
		>
			<div className="processing-modal__info">
				<Spinner />
			</div>
		</TradeModal>
	);
};

export default ProcessingTradeModal;
