import { FC } from 'react';
import { Link } from 'react-router-dom';

// Constants
import { ROUTERS } from 'constants/routers';

// Hooks
import { usePaymentForm } from 'shared/hooks/usePaymentForm';

// Components
import Button from 'shared/components/Button';

interface PaymentConfirmationProps {
	selected: string;
	isValid: boolean;
}

const PaymentConfirmation: FC<PaymentConfirmationProps> = ({ selected, isValid }) => {
	const { isButtonDisabled } = usePaymentForm(selected);
	return (
		<div className="payment-methods__confirmation confirmation">
			<Button type="submit" disabled={isButtonDisabled || !isValid} btnText="Sell your skins!" />
			<p className="confirmation__details">
				By pressing “SELL YOUR SKINS!”, you confirm to have read and understood the
				<Link to={ROUTERS.TERMS_OF_USE}>Terms of Service</Link>
				and <Link to={ROUTERS.PRIVACY_POLICE}>Privacy Police</Link> and agree to all the terms
			</p>
		</div>
	);
};

export default PaymentConfirmation;
