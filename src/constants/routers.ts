export const ROUTERS = {
	HOME: '/',
	FAQ: '/faq',
	FAQ_ID: '/faq/:title',
	SELL: '/sell',
	ABOUT_US: '/about-us',
	TERMS_OF_USE: '/terms-of-use',
	PRIVACY_POLICE: '/privacy-police',
	CONTACT_US: '/contact-us',
	TUTORIAL_ITEM: '/tutorials/:title',
	NOT_FOUND: '*',
	STEAM_AUTH: 'https://api-skinsdeals.com/api/auth/steam',
	STEAM_TRADE: (id: string) => `https://steamcommunity.com/tradeoffer/${id}`,
	STEAM_APP: (id: string) => `steam://url/ShowTradeOffer/${id}`,
};
