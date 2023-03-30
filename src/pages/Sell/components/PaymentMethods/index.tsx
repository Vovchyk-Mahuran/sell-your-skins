import { FC, useCallback } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { useAppDispatch } from 'redux/root';

// Constants
import { CHECKOUT_SYSTEMS } from 'constants/checkoutMethods';

// Enums
import { PaymentMethod } from 'core/enums/payment-methods.enum';
import { TradeModals } from 'core/enums/trade-modals';

// Actions
import { createTrade } from 'redux/user-service/actions';

// Hooks
import { useTradeModals } from 'shared/hooks/useTradeModals';

// Components
import PaymentDetails from '../PaymentDetails';
import PaymentMethodsList from '../PaymentMethodsList';
import PaymentConfirmation from '../PaymentConfirmation';

// Styles
import './index.scss';
import './index.media.scss';
import PaymentInfo from '../PaymentInfo';

export interface CheckoutForm {
	method: string;
	email: string;
	wallet?: string;
}

const initFormik: CheckoutForm = {
	method: CHECKOUT_SYSTEMS[0].title,
	email: '',
	wallet: '',
};

const PaymentForm: FC = () => {
	const dispatch = useAppDispatch();
	// const tradeInfo = useAppSelector(selectorGetTradeinfo);
	// const tradeId = tradeInfo?.id;
	// const [activeModal, setActiveModal] = useState<string>('');
	const { currentModal, setActiveModal } = useTradeModals();

	// useEffect(() => {
	// 	if (tradeInfo?.data?.message) {
	// 		setActiveModal(TradeModals.ERROR);
	// 	} else if (tradeInfo?.status === 'new') {
	// 		setActiveModal(TradeModals.CONFIRM);
	// 		localStorage.setItem(StorageKeys.TRADE_INFO, JSON.stringify(tradeInfo));
	// 	}
	// }, [tradeInfo]);

	// const getActiveTradeStatus = async () => {
	// 	dispatch(getActiveTrade(tradeId));
	// };
	// useEffect(() => {
	// 	if (typeof tradeInfo?.status === 'string') {
	// 		const startCounter = setInterval(() => {
	// 			getActiveTradeStatus();
	// 		}, 10000);

	// 		if (tradeInfo?.status !== 'new') {
	// 			clearInterval(startCounter);
	// 			setActiveModal(tradeInfo.status);
	// 			localStorage.removeItem(StorageKeys.TRADE_INFO);
	// 		}
	// 	}
	// }, [tradeInfo?.status, tradeId]);

	const isCardMethod = useCallback((formik: FormikProps<CheckoutForm>) => {
		return formik.values.method === PaymentMethod.CARD;
	}, []);

	const confirmTrade = ({ method, email, wallet }: CheckoutForm) => {
		const tradeDto = {
			payment_method: method,
			payment_fields: [{ name: 'email', value: email }],
		};
		if (method !== PaymentMethod.CARD && wallet) {
			tradeDto.payment_fields.push({ name: 'wallet', value: wallet });
		}
		dispatch(createTrade(tradeDto));
		setActiveModal(TradeModals.PENDING);
	};

	return (
		<div className="payment-methods">
			<Formik initialValues={initFormik} onSubmit={confirmTrade}>
				{formik => (
					<Form>
						<PaymentMethodsList formik={formik} />
						<PaymentInfo isCard={isCardMethod(formik)} />
						<PaymentDetails selected={formik.values.method} />
						<PaymentConfirmation selected={formik.values.method} />
					</Form>
				)}
			</Formik>
			{currentModal}
		</div>
	);
};

export default PaymentForm;
