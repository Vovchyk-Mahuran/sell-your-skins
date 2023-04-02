// Constants
import { PaymentMethod } from 'core/enums/payment-methods.enum';

// Types
import { PaymentSystem } from 'core/types/payment-system.type';

// Images
import Card from 'assets/icons/card.svg';
import Bitcoin from 'assets/icons/bitcoin.svg';
import TetherTRC20 from 'assets/icons/tether-trc.svg';
import TetherERC20 from 'assets/icons/tether-erc.svg';
import Ethereum from 'assets/icons/ethereum.svg';

export const CHECKOUT_SYSTEMS: PaymentSystem[] = [
	{ src: Bitcoin, title: PaymentMethod.BITCOIN, min: 1, processingTime: 'Instant', fee: 0.5, fixedFee: 5 },
	{ src: TetherERC20, title: PaymentMethod.TETHER_ERC20, min: 1, processingTime: 'Instant', fee: 0.5, fixedFee: 0 },
	{ src: TetherTRC20, title: PaymentMethod.TETHER_TRC20, min: 1, processingTime: 'Instant', fee: 0.5, fixedFee: 0 },
	{ src: Ethereum, title: PaymentMethod.ETHEREUM, min: 1, processingTime: 'Instant', fee: 0.5, fixedFee: 3 },
	{ src: Card, title: PaymentMethod.CARD, min: 0.5, processingTime: 'Instant', fee: 3, fixedFee: 0.5 },
];
