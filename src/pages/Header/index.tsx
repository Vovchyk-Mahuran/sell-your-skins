import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cx from 'classnames';

// Constants
import { ROUTERS } from 'constants/routers';

// Images
import Logo from 'assets/icons/logo.svg';

// Selectors
import { selectorIsAuth } from 'redux/user-service/selector';

// Components
import DefaultNavigation from './components/DefaultNavigation';
import AuthNavigation from './components/AuthNavigation';

// Styles
import './index.scss';
import './index.media.scss';

const Header: FC = () => {
	const isAuth = useSelector(selectorIsAuth);

	return (
		<div className="header">
			<div className={cx('container', { 'container-xl': isAuth })}>
				<Link className="header__logo" to={ROUTERS.HOME}>
					<img src={Logo} alt="SELL YOUR SKINS" />
				</Link>
				<nav className="header__nav">{isAuth ? <AuthNavigation /> : <DefaultNavigation />}</nav>
			</div>
		</div>
	);
};

export default Header;
