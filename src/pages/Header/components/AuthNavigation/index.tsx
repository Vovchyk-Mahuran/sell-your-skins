import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { useAppDispatch } from 'redux/root';
import SVG from 'react-inlinesvg';

// Constants
import { ROUTERS } from 'constants/routers';

// Actions
import { logout } from 'redux/user-service/reducer';

// Images
import SupportIcon from 'assets/icons/support.svg';
import WalletIcon from 'assets/icons/wallet.svg';
import LogoutIcon from 'assets/icons/exit.svg';

// Components
import Avatar from 'shared/components/Avatar';

// Styles
import './index.scss';
import './index.media.scss';

const AuthNavigation: FC = () => {
	const dispatch = useAppDispatch();

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
			<Link to=" " className="auth-header__money">
				<SVG src={WalletIcon} />
				<span className="auth-header__money-count">0 USD</span>
			</Link>
			<div className="auth-header__user header-user">
				<div className="header-user__info">
					<h6 className="header-user__name">vitatov44</h6>
					<button className="header-user__logout" onClick={handleLogout} type="button">
						<span>Sign out</span>
						<SVG src={LogoutIcon} cacheRequests />
					</button>
				</div>
				<Avatar classes="header-user__avatar" />
			</div>
		</div>
	);
};

export default AuthNavigation;
