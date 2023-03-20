import { FC } from 'react';
import { useAppDispatch } from 'redux/root';

// Actions
import { login } from 'redux/user-service/reducer';

// Components
import Button from 'shared/components/Button';

const DefaultNavigation: FC = () => {
	const dispatch = useAppDispatch();
	const loginHandler = () => {
		dispatch(login());
	};
	return (
		<ul className="header__list">
			<Button
				onClick={loginHandler}
				classes="header__button header__button--desktop"
				btnText="Sign in with steam"
			/>
			<Button onClick={loginHandler} classes="header__button header__button--mobile" btnText="Sign in" />
		</ul>
	);
};

export default DefaultNavigation;
