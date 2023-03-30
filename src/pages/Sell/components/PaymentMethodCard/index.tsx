import { FC } from 'react';
import { Field } from 'formik';
import cx from 'classnames';

// Types
import { PaymentSystem } from 'core/types/payment-system.type';

interface PaymentMethodCardProps {
	selected: boolean;
	system: PaymentSystem;
}

const PaymentMethodCard: FC<PaymentMethodCardProps> = ({ selected, system }) => {
	return (
		<label
			key={system.src}
			className={cx('payment-methods__card', {
				selected,
			})}
		>
			<Field
				type="radio"
				value={system.title}
				checked={selected}
				name="method"
				className="payment-methods__radio"
			/>
			<div className="payment-methods__icon">
				<img src={system.src} alt={system.title} />
			</div>
		</label>
	);
};

export default PaymentMethodCard;
