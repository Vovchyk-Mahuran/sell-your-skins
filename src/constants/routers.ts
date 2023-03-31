export const ROUTERS = {
	HOME: '/',
	FAQ: '/faq',
	FAQ_ID: '/faq/:title',
	SELL: '/sell',
	NOT_FOUND: '*',
	STEAM_AUTH: 'https://api-skinsdeals.com/api/auth/steam',
	STEAM_TRADE: (id: string) => `https://steamcommunity.com/tradeoffer/${id}`,
};
