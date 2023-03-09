// Types
import { Step } from 'core/types/step.type';

// Images
import StepOne from 'assets/img/step-1.webp';
import StepTwo from 'assets/img/step-2.webp';
import StepThree from 'assets/img/step-3.webp';
import StepFour from 'assets/img/step-4.webp';

export const MANUAL_STEPS: Step[] = [
	{
		id: crypto.randomUUID(),
		title: 'Log in with your Steam account',
		description: 'Set your basic settings in a few short steps and start selling your items immediately',
		list: [
			'Enter your Steam trade link',
			'Make your profile and inventory public',
			'Choose your language and currency',
		],
		img: StepOne,
	},
	{
		id: crypto.randomUUID(),
		title: 'Select items and payment method',
		description: 'Choose from a wide variety of payment methods in our offer, available in 180+ countries',
		list: ['Select the items to sell or your entire inventory', 'Choose your payment method'],
		img: StepTwo,
	},
	{
		id: crypto.randomUUID(),
		title: 'Submit data and accept the offer',
		description: 'Enter your payment details and accept the trade offer from one of our bots',
		list: ['100% Secure', 'Instant Cash', 'No Hidden Fees'],
		img: StepThree,
	},
	{
		id: crypto.randomUUID(),
		title: 'Enjoy the money in your account!',
		description: 'After the transaction is completed, the funds will appear on your account shortly',
		list: [
			'You will get an e-mail invoice, once the payment is done',
			'Follow our social media for information and giveaways',
			'Collect bonus levels to get even better prices!',
		],
		img: StepFour,
	},
];
