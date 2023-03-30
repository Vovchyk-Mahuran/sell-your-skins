import { FC } from 'react';

// Images
import ErrorIcon from 'assets/icons/error-alert.svg';

// Componets
import TradeModal from 'shared/components/TradeModal';

interface ErrorModalProps {
	isOpen: boolean;
	message?: string;
	onClose: () => void;
}

const ErrorModal: FC<ErrorModalProps> = ({ isOpen, message, onClose }) => {
	return (
		<TradeModal
			closeHandler={onClose}
			isOpen={isOpen}
			statusIcon={ErrorIcon}
			modalTitle="Error occured!"
			classes="error-modal"
			close
		>
			<p className="processing-modal__info">{message}</p>
		</TradeModal>
	);
};

export default ErrorModal;
