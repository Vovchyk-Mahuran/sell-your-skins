import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { useAppDispatch, useAppSelector } from 'redux/root';
import SVG from 'react-inlinesvg';

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
import './index.media.scss';

const AuthNavigation: FC = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectorGetUser);

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<div className="auth-header">
			<div className="auth-header__item">
				<Link
					data-tooltip-id="support"
					data-tooltip-content="Support"
					data-tooltip-place="bottom"
					className="auth-header__link"
					to={ROUTERS.FAQ}
				>
					<SVG src={SupportIcon} cacheRequests />
				</Link>
				<Tooltip id="support" />
			</div>
			<div className="auth-header__user header-user">
				<div className="header-user__info">
					<h6 className="header-user__name">{user.username}</h6>
					<button className="header-user__logout" onClick={handleLogout} type="button">
						<span>Sign out</span>
						<SVG src={LogoutIcon} cacheRequests />
					</button>
				</div>
				<Avatar src={user.avatar} classes="header-user__avatar" />
			</div>
		</div>
	);
};

export default AuthNavigation;
