import { useState, useMemo, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/root';

// Constants
import { StorageKeys } from 'constants/storageKeys';
import { TradeModals } from 'core/enums/trade-modals';

// Selectors
import { selectorGetTradeinfo } from 'redux/user-service/selector';

// Actions
import { getActiveTrade } from 'redux/user-service/actions';
import { clearTrade } from 'redux/user-service/reducer';

// Components
import ConfirmationTradeModal from 'pages/Sell/Modals/ConfirmationTradeModal';
import DeclinedTrade from 'pages/Sell/Modals/DeclinedTrade';
import ErrorModal from 'pages/Sell/Modals/ErrorModal';
import ProcessingTradeModal from 'pages/Sell/Modals/ProcessingTradeModal';
import SuccessTrade from 'pages/Sell/Modals/SuccessTrade';

export const useTradeModals = () => {
	const dispatch = useAppDispatch();
	const tradeInfo = useAppSelector(selectorGetTradeinfo);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [activeModal, setActiveModal] = useState<string>('');
	const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout>();

	const tradeId = useMemo(() => tradeInfo?.id, [tradeInfo?.id]);

	const isLastModal = useMemo(
		() => activeModal === TradeModals.ACCEPTED || activeModal === TradeModals.DECLINED,
		[activeModal]
	);

	const closeModal = () => {
		setShowModal(false);
		if (isLastModal) {
			window.location.reload();
		}
	};

	const getActiveTradeStatus = async () => {
		dispatch(getActiveTrade(tradeId));
	};

	const startTimer = () => {
		const startCounter: NodeJS.Timeout = setInterval(getActiveTradeStatus, 5000);
		setTimerInterval(startCounter);
	};

	const finishTimer = () => {
		clearInterval(timerInterval);
		setActiveModal(tradeInfo?.status);
		setTimerInterval(undefined);
		dispatch(clearTrade());
	};

	useEffect(() => {
		if (tradeInfo?.data?.message) {
			setActiveModal(TradeModals.ERROR);
		} else if (tradeInfo?.status === TradeModals.NEW) {
			setActiveModal(TradeModals.CONFIRM);
			localStorage.setItem(StorageKeys.TRADE_INFO, JSON.stringify(tradeInfo));
		}
	}, [tradeInfo]);

	useEffect(() => {
		if (typeof tradeInfo?.status === 'string') {
			if (!!tradeInfo?.id && !timerInterval) {
				startTimer();
			}

			if (tradeInfo?.status !== TradeModals.NEW) {
				finishTimer();
			}
		}
	}, [tradeInfo, timerInterval]);

	useEffect(() => {
		if (activeModal) {
			setShowModal(true);
		} else {
			setShowModal(false);
		}
	}, [activeModal]);

	const currentModal = useMemo(() => {
		switch (activeModal) {
			case TradeModals.PENDING:
				return <ProcessingTradeModal isOpen={showModal} onClose={closeModal} />;
			case TradeModals.ERROR:
				return <ErrorModal isOpen={showModal} message={tradeInfo?.data?.message} onClose={closeModal} />;
			case TradeModals.CONFIRM:
				return <ConfirmationTradeModal isOpen={showModal} />;
			case TradeModals.ACCEPTED:
				return <SuccessTrade isOpen={showModal} onClose={closeModal} />;
			case TradeModals.DECLINED:
				return <DeclinedTrade isOpen={showModal} onClose={closeModal} />;
			default:
				return null;
		}
	}, [activeModal, showModal]);

	return {
		currentModal,
		setActiveModal,
	};
};
