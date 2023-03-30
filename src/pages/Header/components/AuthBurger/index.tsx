import { FC } from 'react';
import SVG from 'react-inlinesvg';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/root';

// Constants
import { ROUTERS } from 'constants/routers';

// Selectors
import { selectorGetUser } from 'redux/user-service/selector';

// Actions
import { logout } from 'redux/user-service/reducer';

// Images
import SupportIcon from 'assets/icons/support.svg';
import LogoutIcon from 'assets/icons/exit.svg';

// Components
import Avatar from 'shared/components/Avatar';

// Styles
import './index.scss';

interface BurgerProps {
	isOpen: boolean;
}

const AuthBurger: FC<BurgerProps> = ({ isOpen }) => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectorGetUser);

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<div className={cx('auth-burger', { active: isOpen })}>
			<div className={cx('auth-burger__menu', { active: isOpen })}>
				<div className="auth-burger__user">
					<div className="auth-burger__info">
						<h6 className="auth-burger__name">{user.username}</h6>
						<button className="auth-burger__logout" onClick={handleLogout} type="button">
							<span>Sign out</span>
							<SVG src={LogoutIcon} cacheRequests />
						</button>
					</div>
					<Avatar src={user.avatar} classes="header-user__avatar" />
				</div>
				<div className="auth-burger__item">
					<Link className="auth-burger__link" to={ROUTERS.FAQ}>
						<SVG src={SupportIcon} cacheRequests />
						<span className="">Support</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AuthBurger;
