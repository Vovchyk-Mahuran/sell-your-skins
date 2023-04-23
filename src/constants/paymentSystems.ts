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

export const PAYMENT_SYSTEMS = [
	{ src: PayPal, title: 'PayPal', min: 20, processingTime: '0-15 min', fee: 2.9, fixedFee: 0 },
	{ src: BankTransfer, title: 'Bank Transfer', min: 20, processingTime: '0-24 hours', fee: 2.5, fixedFee: 0 },
	{ src: Skrill, title: 'Skrill', min: 50, processingTime: '0-30 min', fee: 2.9, fixedFee: 0 },
	{ src: Card, title: 'Card', min: 0, processingTime: 'Instant', fee: 3, fixedFee: 0.5 },
	{ src: Qiwi, title: 'Qiwi', min: 0, processingTime: 'Instant', fee: 3, fixedFee: 0 },
	{ src: YooMoney, title: 'YooMoney', min: 0, processingTime: 'Instant', fee: 3, fixedFee: 0 },
	{ src: WebMoney, title: 'WebMoney', min: 10, processingTime: '0-30 min', fee: 1, fixedFee: 0 },
	{ src: Bitcoin, title: 'Bitcoin', min: 3, processingTime: 'Instant', fee: 0.5, fixedFee: 10 },
	{ src: Tether, title: 'Tether', min: 10, processingTime: 'Instant', fee: 0.5, fixedFee: 10 },
];
