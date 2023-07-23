import { FC, useEffect } from 'react';
import { useFormikContext } from 'formik';

// Constants
import { CHECKOUT_SYSTEMS } from 'constants/checkoutMethods';

// Types
import { PaymentSystem } from 'core/types/payment-system.type';
import { CheckoutForm } from '../PaymentMethods';
import PaymentMethodCard from '../PaymentMethodCard';

interface PaymentMethodsListProps {
	setSelected: (value: PaymentSystem) => void;
}

const PaymentMethodsList: FC<PaymentMethodsListProps> = ({ setSelected }) => {
	const formikContext = useFormikContext<CheckoutForm>();

	useEffect(() => {
		formikContext?.resetForm();
	}, [formikContext.values?.method]);

	return (
		<div className="payment-methods__cards">
			{CHECKOUT_SYSTEMS.map(system => (
				<PaymentMethodCard setSelected={setSelected} key={system.title} system={system} />
			))}
		</div>
	);
};

export default PaymentMethodsList;
