import { FC } from 'react';
import { Link } from 'react-router-dom';

// Types
import { HeaderLink } from 'core/types/header-link.type';

interface FooterLinkProps {
	item: HeaderLink;
}

const FooterLink: FC<FooterLinkProps> = ({ item }) => (
	<Link className="footer__link" to={item.href}>
		{item.title}
	</Link>
);

export default FooterLink;
