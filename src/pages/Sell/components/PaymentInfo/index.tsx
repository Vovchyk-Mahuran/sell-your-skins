import { FC } from 'react';
import { Field } from 'formik';

interface PaymentInfoProps {
	isCard: boolean;
}

const PaymentInfo: FC<PaymentInfoProps> = ({ isCard }) => {
	return (
		<div className="payment-methods__info">
			<label htmlFor="email">Email:</label>
			<Field autoComplete="off" className="input" name="email" placeholder="Enter your email" />
			{!isCard ? (
				<>
					<label htmlFor="wallet">Wallet:</label>
					<Field autoComplete="off" className="input" name="wallet" placeholder="Enter your wallet" />
				</>
			) : (
				<p className="payment-methods__info--card">
					After submitting this form you will be asked for enter your card data
				</p>
			)}
		</div>
	);
};

export default PaymentInfo;
