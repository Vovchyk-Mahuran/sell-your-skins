import { FC } from 'react';
import SteamLink from 'shared/components/SteamLink';

const DefaultNavigation: FC = () => {
	return (
		<ul className="header__list">
			<SteamLink text="Sign in with steam" classes="header__button button--desktop" />
			<SteamLink text="Sign in" classes="header__button button--mobile" />
		</ul>
	);
};

export default DefaultNavigation;
