import { FC } from 'react';

// Hooks
import { usePaymentForm } from 'shared/hooks/usePaymentForm';

interface PaymentDetailsProps {
	selected: string;
}

const PaymentDetails: FC<PaymentDetailsProps> = ({ selected }) => {
	const { amount, fee, totalPrice, currentMethod } = usePaymentForm(selected);

	if (!currentMethod) return null;

	return (
		<div className="details transaction-details">
			<div className="details__item details--transaction-value">
				<span className="details__title">Transaction value:</span>
				<span className="details__value">{amount}</span>
			</div>
			<div className="details__item details--fee">
				<span className="details__title">Processing fee:</span>
				<span className="details__value">{fee}</span>
			</div>
			<div className="details__item details--total">
				<span className="details__title">Total payout:</span>
				<span className="details__value marked">{totalPrice}</span>
			</div>
		</div>
	);
};

export default PaymentDetails;
