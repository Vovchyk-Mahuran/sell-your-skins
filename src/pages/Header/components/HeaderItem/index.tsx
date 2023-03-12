import { FC } from 'react';
import { Link } from 'react-router-dom';

// Types
import { HeaderLink } from 'core/types/header-link.type';

interface HeaderItemProps {
	item: HeaderLink;
}

const HeaderItem: FC<HeaderItemProps> = ({ item }) => (
	<Link to={item.href} className="header__link">
		{item.title}
	</Link>
);

export default HeaderItem;
