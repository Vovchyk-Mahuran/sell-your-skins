export const API = {
	AUTH_STEAM: 'auth/steam',
	LIVE_DEALS: '/live-deals',
	GET_USER: '/user',
	SET_TRADE_URL: '/user/set-trade-url',
	GET_INVENTORY: (id: string) => `/inventory/${id}`,
	SELECT_ITEM: (appId: string, itemId: string) => `/inventory/${appId}/${itemId}`,
	CREATE_TRADE: '/trade',
	GET_ACTIVE_TRADE: (id: string) => `/trade/${id}`,
};
