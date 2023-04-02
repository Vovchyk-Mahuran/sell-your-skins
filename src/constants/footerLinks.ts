import { FooterColumn } from 'core/types/footer-column.type';

export const FOOTER_LINKS: FooterColumn[] = [
	{
		title: 'Menu',
		items: [
			{ title: 'Sell Skins', href: '/' },
			{ title: 'About Us', href: '/' },
			{ title: 'FAQ', href: '/faq' },
		],
	},
	{
		title: 'Other',
		items: [
			{ title: 'Terms of Service', href: '/' },
			{ title: 'Privacy Policy', href: '/' },
			{ title: 'Contact', href: '/' },
		],
	},
	{
		title: 'Tutorials',
		items: [
			{ title: 'How to Sell Skins?', href: '/' },
			{ title: 'How to Set Up Your Account?', href: '/' },
			{ title: 'How to Find Your Trade URL?', href: '/' },
		],
	},
];
