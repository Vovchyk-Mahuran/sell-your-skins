import { FC, useCallback } from 'react';
import { FormikProps } from 'formik';

// Constants
import { CHECKOUT_SYSTEMS } from 'constants/checkoutMethods';

// Types
import { CheckoutForm } from '../PaymentMethods';
import PaymentMethodCard from '../PaymentMethodCard';

interface PaymentMethodsListProps {
	formik: FormikProps<CheckoutForm>;
}

const PaymentMethodsList: FC<PaymentMethodsListProps> = ({ formik }) => {
	const isSelected = useCallback(
		(item: string) => {
			return formik.values.method === item;
		},
		[formik]
	);
	return (
		<div className="payment-methods__cards">
			{CHECKOUT_SYSTEMS.map(system => (
				<PaymentMethodCard key={system.title} system={system} selected={isSelected(system.title)} />
			))}
		</div>
	);
};

export default PaymentMethodsList;
