import { FC } from 'react';

// Constants
import { PAYMENT_SYSTEMS } from 'constants/paymentSystems';

// Styles
import './index.scss';

const PaymentSystems: FC = () => (
	<div className="payment-systems__container container">
		{PAYMENT_SYSTEMS.map(system => (
			<img key={system.title} src={system.src} alt={system.title} />
		))}
	</div>
);

export default PaymentSystems;
