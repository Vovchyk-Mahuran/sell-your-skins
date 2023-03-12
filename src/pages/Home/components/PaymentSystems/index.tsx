import { FC } from 'react';

// Constants
import { PAYMENT_SYSTEMS } from 'constants/paymentSystems';

// Styles
import './index.scss';
import './index.media.scss';

const PaymentSystems: FC = () => (
	<div className="payment-systems__container container">
		{PAYMENT_SYSTEMS.map(system => (
			<img className="payment-system" key={system.title} src={system.src} alt={system.title} />
		))}
	</div>
);

export default PaymentSystems;
