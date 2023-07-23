import { FooterColumn } from 'core/types/footer-column.type';
import { parseStringToUrl } from 'utils/parseStringToUrl';
import { ROUTERS } from './routers';

export const FOOTER_LINKS: FooterColumn[] = [
	{
		title: 'Menu',
		items: [
			{ title: 'Sell Skins', href: ROUTERS.HOME },
			{ title: 'About Us', href: ROUTERS.ABOUT_US },
			{ title: 'FAQ', href: ROUTERS.FAQ },
		],
	},
	{
		title: 'Other',
		items: [
			{ title: 'Terms of Service', href: ROUTERS.TERMS_OF_USE },
			{ title: 'Privacy Policy', href: ROUTERS.PRIVACY_POLICE },
			{ title: 'Contact', href: ROUTERS.CONTACT_US },
		],
	},
	{
		title: 'Tutorials',
		items: [
			{ title: 'How to Sell Skins?', href: `/tutorials/${parseStringToUrl('How to Sell Skins?')}` },
			{
				title: 'How to Set Up Your Account?',
				href: `/tutorials/${parseStringToUrl('How to Set Up Your Account?')}`,
			},
			{
				title: 'How to Find Your Trade URL?',
				href: `/tutorials/${parseStringToUrl('How to Find Your Trade URL?')}`,
			},
		],
	},
];
