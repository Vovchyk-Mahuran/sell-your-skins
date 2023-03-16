import { FC } from 'react';
import { Link } from 'react-router-dom';

// Constants
import { ROUTERS } from 'constants/routers';

// Images
import Logo from 'assets/icons/logo.svg';

// Components
import Button from 'shared/components/Button';

// Styles
import './index.scss';
import './index.media.scss';

const Header: FC = () => (
	<div className="header">
		<div className="container">
			<Link className="header__logo" to={ROUTERS.HOME}>
				<img src={Logo} alt="SELL YOUR SKINS" />
			</Link>
			<nav className="header__nav">
				<ul className="header__list">
					<Button classes="header__button header__button--desktop" btnText="Sign in with steam" />
					<Button classes="header__button header__button--mobile" btnText="Sign in" />
				</ul>
			</nav>
		</div>
	</div>
);

export default Header;
