export const ROUTERS = {
	HOME: '/',
	FAQ: '/faq',
	FAQ_ID: '/faq/:title',
	SELL: '/sell',
	NOT_FOUND: '*',
	STEAM_AUTH: 'http://146.190.232.132/api/auth/steam',
	STEAM_TRADE: (id: string) => `https://steamcommunity.com/tradeoffer/${id}`,
};
