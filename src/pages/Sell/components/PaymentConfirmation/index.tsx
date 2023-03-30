import { FC } from 'react';

// Hooks
import { usePaymentForm } from 'shared/hooks/usePaymentForm';

// Components
import Button from 'shared/components/Button';

interface PaymentConfirmationProps {
	selected: string;
}

const PaymentConfirmation: FC<PaymentConfirmationProps> = ({ selected }) => {
	const { isButtonDisabled } = usePaymentForm(selected);
	return (
		<div className="payment-methods__confirmation confirmation">
			<Button type="submit" disabled={isButtonDisabled} btnText="Sell your skins!" />
			<p className="confirmation__details">
				By pressing “SELL YOUR SKINS!”, you confirm to have read and understood the
				<a href=" ">Terms of Service</a>
				and <a href=" ">Privacy Policy</a> and agree to all the terms
			</p>
		</div>
	);
};

export default PaymentConfirmation;
