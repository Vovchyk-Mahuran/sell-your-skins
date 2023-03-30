import { useMemo } from 'react';
import { useAppSelector } from 'redux/root';

// Constants
import { CHECKOUT_SYSTEMS } from 'constants/checkoutMethods';

// Selectors
import { selectorGetTransactionValue } from 'redux/inventory-service/selector';
import { selectorGetTradeUrlError } from 'redux/user-service/selector';

export const usePaymentForm = (selected: string) => {
	const userTransactionValue = useAppSelector(selectorGetTransactionValue);
	const urlError = useAppSelector(selectorGetTradeUrlError);

	const currentMethod = CHECKOUT_SYSTEMS.find(system => system.title === selected);

	const amount = useMemo(() => `${userTransactionValue} $`, [userTransactionValue]);

	const totalWithFee = useMemo(() => {
		if (currentMethod) {
			return userTransactionValue * (1 - currentMethod.fee / 100) - currentMethod.fixedFee;
		}
		return 0;
	}, [selected, currentMethod, userTransactionValue]);

	const totalPrice = useMemo(() => {
		if (currentMethod) {
			return totalWithFee > 0
				? `${totalWithFee.toFixed(2)} $`
				: `Minimum transaction value is ${currentMethod.fixedFee + 0.01} $`;
		}
		return '';
	}, [totalWithFee, currentMethod]);

	const fee = useMemo(() => {
		if (currentMethod) {
			return currentMethod.fixedFee
				? `${currentMethod.fixedFee} $ + ${currentMethod.fee.toFixed(2)}%`
				: `${currentMethod.fee.toFixed(2)}%`;
		}
		return '';
	}, [currentMethod]);

	const isButtonDisabled = useMemo(
		() => !userTransactionValue || totalWithFee < 0 || !!urlError,
		[userTransactionValue, totalWithFee, urlError]
	);

	return { fee, totalPrice, amount, currentMethod, isButtonDisabled };
};
