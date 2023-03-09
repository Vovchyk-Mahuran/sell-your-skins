import { FC } from 'react';
import { Link } from 'react-router-dom';

// Constants
import { ROUTERS } from 'constants/routers';
import { HEADER_LINKS } from 'constants/headerLinks';

// Images
import Logo from 'assets/icons/logo.svg';

// Components
import Button from 'shared/components/Button';
import HeaderItem from './HeaderItem';

// Styles
import './index.scss';

const Header: FC = () => (
	<div className="header">
		<div className="container">
			<Link to={ROUTERS.HOME}>
				<img src={Logo} alt="SELL YOUR SKINS" />
			</Link>
			<nav className="header__nav">
				<ul className="header__list">
					{HEADER_LINKS.map(item => (
						<HeaderItem key={item.link} item={item} />
					))}
					<Button classes="header__button" btnText="Sign in with steam" />
				</ul>
			</nav>
		</div>
	</div>
);

export default Header;
