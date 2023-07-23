import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'redux/root';
import cx from 'classnames';

// Constants
import { ROUTERS } from 'constants/routers';

// Images
import Logo from 'assets/img/logo.png';

// Selectors
import { selectorIsAuth } from 'redux/user-service/selector';

// Components
import DefaultNavigation from './components/DefaultNavigation';
import AuthNavigation from './components/AuthNavigation';
import AuthBurger from './components/AuthBurger';

// Styles
import './index.scss';
import './index.media.scss';

const Header: FC = () => {
	const isAuth = useAppSelector(selectorIsAuth);
	const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setMenuOpen(prev => !prev);
	};

	return (
		<div className="header">
			<div className={cx('container', { 'container-xl': isAuth })}>
				<div className="header__content">
					<Link
						className={cx('header__logo', { 'header__logo--auth': isAuth })}
						to={isAuth ? ROUTERS.SELL : ROUTERS.HOME}
					>
						<img src={Logo} alt="SELL YOUR SKINS" />
					</Link>
					<nav className="header__nav">{isAuth ? <AuthNavigation /> : <DefaultNavigation />}</nav>
					<div className="header__nav--mobile">
						{isAuth ? (
							<div className={cx('auth-burger__icon', { active: isMenuOpen })} onClick={toggleMenu}>
								<span />
								<span />
								<span />
							</div>
						) : (
							<DefaultNavigation />
						)}
					</div>
				</div>
			</div>
			<AuthBurger isOpen={isMenuOpen} />
		</div>
	);
};

export default Header;
