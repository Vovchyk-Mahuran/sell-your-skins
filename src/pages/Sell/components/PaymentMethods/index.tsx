import { FC, useMemo, useState } from 'react';
import { Formik, Form } from 'formik';
import { useAppDispatch } from 'redux/root';
import * as yup from 'yup';

// Constants
import { CHECKOUT_SYSTEMS } from 'constants/checkoutMethods';

// Enums
import { TradeModals } from 'core/enums/trade-modals';

// Actions
import { createTrade } from 'redux/user-service/actions';

// Types
import { PaymentSystem } from 'core/types/payment-system.type';

// Hooks
import { useTradeModals } from 'shared/hooks/useTradeModals';

// Components
import PaymentDetails from '../PaymentDetails';
import PaymentMethodsList from '../PaymentMethodsList';
import PaymentConfirmation from '../PaymentConfirmation';
import PaymentInfo from '../PaymentInfo';

// Styles
import './index.scss';
import './index.media.scss';

export interface CheckoutForm {
	method: string;
	[name: string]: any;
}

const getInitaialValues = (selectedItem: PaymentSystem): CheckoutForm => {
	return selectedItem.fields.reduce(
		(acc: CheckoutForm, curr) => {
			acc[curr.name] = curr.value || '';
			return acc;
		},
		{ method: selectedItem.title }
	);
};

const getValidationSchema = (selectedItem: PaymentSystem) => {
	return yup.object().shape(
		selectedItem.fields.reduce((acc: any, curr) => {
			acc[curr.name] = curr.validation;
			return acc;
		}, {})
	);
};

const PaymentForm: FC = () => {
	const dispatch = useAppDispatch();
	const { currentModal, setActiveModal } = useTradeModals();
	const [selectedMethod, setSelectedMethod] = useState<PaymentSystem>(CHECKOUT_SYSTEMS[0]);

	const initFormik = useMemo(() => {
		return getInitaialValues(selectedMethod);
	}, [selectedMethod]);

	const validationSchema = useMemo(() => {
		return getValidationSchema(selectedMethod);
	}, [selectedMethod]);

	const confirmTrade = (values: CheckoutForm) => {
		const { method, ...fields } = values;

		const paymentFields = Object.entries(fields).map(([key, value]) => ({ name: key, value }));
		const tradeDto = {
			payment_method: method,
			payment_fields: paymentFields,
		};
		dispatch(createTrade(tradeDto));
		setActiveModal(TradeModals.PENDING);
	};

	return (
		<div className="payment-methods">
			<Formik
				enableReinitialize
				initialValues={initFormik}
				validateOnBlur
				validationSchema={validationSchema}
				onSubmit={confirmTrade}
			>
				{formik => (
					<Form>
						<PaymentMethodsList setSelected={setSelectedMethod} />
						<PaymentInfo selected={selectedMethod} />
						<PaymentDetails selected={formik.values.method} />
						<PaymentConfirmation isValid={formik.isValid} selected={formik.values.method} />
					</Form>
				)}
			</Formik>
			{currentModal}
		</div>
	);
};

export default PaymentForm;
