import { FC, useState } from 'react';
import SVG from 'react-inlinesvg';
import cx from 'classnames';

// Constants
import { PAYMENT_SYSTEMS } from 'constants/paymentSystems';

// Types
import { PaymentSystem } from 'core/types/payment-system.type';

// Images
import AvaliableIcon from 'assets/icons/avaliable.svg';

// Components
import Button from 'shared/components/Button';

// Styles
import './index.scss';
import './index.media.scss';

const PaymentMethods: FC = () => {
	const [selected, setSelected] = useState<PaymentSystem>(PAYMENT_SYSTEMS[0]);

	const choosePaymentMethod = (method: PaymentSystem) => {
		setSelected(method);
	};

	return (
		<div className="payment-methods">
			<span className="payment-methods__title">Choose your payment method:</span>
			<div className="payment-methods__cards">
				{PAYMENT_SYSTEMS.map(system => (
					<div
						onClick={() => choosePaymentMethod(system)}
						key={system.title}
						className={cx('payment-methods__card', { selected: system.title === selected.title })}
					>
						<img src={system.src} alt={system.title} />
					</div>
				))}
			</div>
			<div className="payment-methods__details details">
				<div className="details__item details--min">
					<span className="details__title">Minimum amount:</span>
					<span className="details__value">{selected.min} USD</span>
				</div>
				<div className="details__item details--time">
					<span className="details__title">Processing time:</span>
					<span className="details__value">{selected.processingTime}</span>
				</div>
				<div className="details__item details--avaliable">
					<span className="details__title">Avaliable:</span>
					<span className="details__value">
						<SVG src={AvaliableIcon} cacheRequests />
						Yes
					</span>
				</div>
			</div>
			<div className="details transaction-details">
				<div className="details__item details--transaction-value">
					<span className="details__title">Transaction value:</span>
					<span className="details__value">10 $</span>
				</div>
				<div className="details__item details--fee">
					<span className="details__title">Processing fee:</span>
					<span className="details__value">
						{selected.fixedFee
							? `${selected.fixedFee}$ + ${selected.fee.toFixed(2)}%`
							: `${selected.fee.toFixed(2)}%`}
					</span>
				</div>
				<div className="details__item details--total">
					<span className="details__title">Total payout:</span>
					<span className="details__value marked">10 $</span>
				</div>
			</div>
			<div className="payment-methods__confirmation confirmation">
				<Button btnText="Sell your skins!" />
				<p className="confirmation__details">
					By pressing “SELL YOUR SKINS!”, you confirm to have read and understood the
					<a href=" ">Terms of Service</a>
					and <a href=" ">Privacy Policy</a> and agree to all the terms
				</p>
			</div>
		</div>
	);
};

export default PaymentMethods;
