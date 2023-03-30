import { User } from 'core/types/user.type';

export interface IUserReducer {
	isAuth: boolean;
	user: User;
	tradeUrlError: string;
	tradeInfo: any;
}
