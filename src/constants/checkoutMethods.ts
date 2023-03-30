// Constants
import { PaymentMethod } from 'core/enums/payment-methods.enum';

// Types
import { PaymentSystem } from 'core/types/payment-system.type';

// Images
import Card from 'assets/icons/card.svg';
import Bitcoin from 'assets/icons/bitcoin.svg';
import Tether from 'assets/icons/tether.svg';
import Ethereum from 'assets/icons/ethereum.svg';

export const CHECKOUT_SYSTEMS: PaymentSystem[] = [
	{ src: Bitcoin, title: PaymentMethod.BITCOIN, min: 1, processingTime: 'Instant', fee: 0.5, fixedFee: 10 },
	{ src: Tether, title: PaymentMethod.TETHER, min: 1, processingTime: 'Instant', fee: 0.5, fixedFee: 10 },
	{ src: Ethereum, title: PaymentMethod.ETHEREUM, min: 1, processingTime: 'Instant', fee: 0.5, fixedFee: 10 },
	{ src: Card, title: PaymentMethod.CARD, min: 0.5, processingTime: 'Instant', fee: 3, fixedFee: 0.5 },
];
