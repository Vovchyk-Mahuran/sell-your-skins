import * as yup from 'yup';

// Constants
import { PaymentMethod } from 'core/enums/payment-methods.enum';

// Types
import { PaymentSystem } from 'core/types/payment-system.type';

// Images
import Card from 'assets/icons/card.svg';
import PayPal from 'assets/icons/paypal.svg';
import Bitcoin from 'assets/icons/bitcoin.svg';
import TetherTRC20 from 'assets/icons/tether-trc.svg';
import TetherERC20 from 'assets/icons/tether-erc.svg';
import Ethereum from 'assets/icons/ethereum.svg';

export const CHECKOUT_SYSTEMS: PaymentSystem[] = [
	{
		src: Bitcoin,
		title: PaymentMethod.BITCOIN,
		min: 20,
		processingTime: 'Instant',
		fee: 0,
		fixedFee: 3,
		fields: [
			{
				label: 'Email',
				name: 'email',
				placeholder: 'Enter your email',
				type: 'text',
				validation: yup.string().email('non-valid email').required(),
			},
			{
				label: 'Wallet',
				name: 'wallet',
				placeholder: 'Enter your wallet',
				type: 'text',
				validation: yup.string().required(),
			},
		],
	},
	{
		src: TetherERC20,
		title: PaymentMethod.TETHER_ERC20,
		min: 3,
		processingTime: 'Instant',
		fee: 0,
		fixedFee: 1,
		fields: [
			{
				label: 'Email',
				name: 'email',
				placeholder: 'Enter your email',
				type: 'text',
				validation: yup.string().email('non-valid email').required(),
			},
			{
				label: 'Wallet',
				name: 'wallet',
				placeholder: 'Enter your wallet',
				type: 'text',
				validation: yup.string().required(),
			},
		],
	},
	{
		src: TetherTRC20,
		title: PaymentMethod.TETHER_TRC20,
		min: 3,
		processingTime: 'Instant',
		fee: 0,
		fixedFee: 0.2,
		fields: [
			{
				label: 'Email',
				name: 'email',
				placeholder: 'Enter your email',
				type: 'text',
				validation: yup.string().email('non-valid email').required(),
			},
			{
				label: 'Wallet',
				name: 'wallet',
				placeholder: 'Enter your wallet',
				type: 'text',
				validation: yup.string().required(),
			},
		],
	},
	{
		src: Ethereum,
		title: PaymentMethod.ETHEREUM,
		min: 5,
		processingTime: 'Instant',
		fee: 0,
		fixedFee: 1,
		fields: [
			{
				label: 'Email',
				name: 'email',
				placeholder: 'Enter your email',
				type: 'text',
				validation: yup.string().email('non-valid email').required(),
			},
			{
				label: 'Wallet',
				name: 'wallet',
				placeholder: 'Enter your wallet',
				type: 'text',
				validation: yup.string().required(),
			},
		],
	},
	{
		src: Card,
		title: PaymentMethod.CARD,
		min: 10,
		processingTime: 'Instant',
		fee: 3,
		fixedFee: 0.5,
		fields: [
			{
				label: 'Email',
				name: 'email',
				placeholder: 'Enter your email',
				type: 'text',
				validation: yup.string().email('non-valid email').required(),
			},
			{
				label: 'Card',
				name: 'card',
				placeholder: 'Enter your wallet',
				type: 'text',
				validation: yup.string().required(),
			},
		],
	},
	{
		src: PayPal,
		title: PaymentMethod.PAYPAL,
		min: 5,
		processingTime: 'Instant',
		fee: 1,
		fixedFee: 0,
		fields: [
			{
				label: 'Email',
				name: 'email',
				placeholder: 'Enter your email',
				type: 'text',
				validation: yup.string().email('non-valid email').required(),
			},
			{
				label: 'Wallet',
				name: 'wallet',
				placeholder: 'Enter your wallet',
				type: 'text',
				validation: yup.string().required(),
			},
		],
	},
];
