import { FC, useMemo } from 'react';
import { Field, useFormikContext } from 'formik';
import cx from 'classnames';

// Types
import { PaymentSystem } from 'core/types/payment-system.type';
import { CheckoutForm } from '../PaymentMethods';

interface PaymentMethodCardProps {
	system: PaymentSystem;
	setSelected: (value: PaymentSystem) => void;
}

const PaymentMethodCard: FC<PaymentMethodCardProps> = ({ setSelected, system }) => {
	const formikContext = useFormikContext<CheckoutForm>();

	const isSelectedMethod = useMemo(() => {
		return formikContext?.values?.method === system.title;
	}, [formikContext?.values?.method]);

	return (
		// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
		<label
			key={system.src}
			className={cx('payment-methods__card', {
				selected: isSelectedMethod,
			})}
			onClick={() => {
				setSelected(system);
			}}
		>
			<Field
				type="radio"
				value={system.title}
				checked={isSelectedMethod}
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
