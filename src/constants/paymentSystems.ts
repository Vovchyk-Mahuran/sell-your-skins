// Types
import { PaymentSystem } from 'core/types/payment-system.type';

// Images
import PayPal from 'assets/icons/paypal.svg';
import BankTransfer from 'assets/icons/bank.svg';
import Skrill from 'assets/icons/skrill.svg';
import Card from 'assets/icons/card.svg';
import Qiwi from 'assets/icons/qiwi.svg';
import YooMoney from 'assets/icons/yoomoney.svg';
import WebMoney from 'assets/icons/webmoney.svg';
import Bitcoin from 'assets/icons/bitcoin.svg';
import Tether from 'assets/icons/tether.svg';

export const PAYMENT_SYSTEMS: PaymentSystem[] = [
	{ src: PayPal, title: 'PayPal' },
	{ src: BankTransfer, title: 'Bank Transfer' },
	{ src: Skrill, title: 'Skrill' },
	{ src: Card, title: 'Card' },
	{ src: Qiwi, title: 'Qiwi' },
	{ src: YooMoney, title: 'YooMoney' },
	{ src: WebMoney, title: 'WebMoney' },
	{ src: Bitcoin, title: 'Bitcoin' },
	{ src: Tether, title: 'Tether' },
];
