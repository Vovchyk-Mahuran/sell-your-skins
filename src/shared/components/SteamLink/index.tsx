import { FC } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

// Constants
import { ROUTERS } from 'constants/routers';

interface SteamLinkProps {
	text?: string;
	classes?: string;
}

const SteamLink: FC<SteamLinkProps> = ({ text = 'Try it now!', classes }) => {
	return (
		<Link className={cx('button', classes)} to={ROUTERS.STEAM_AUTH}>
			{text}
		</Link>
	);
};

export default SteamLink;
