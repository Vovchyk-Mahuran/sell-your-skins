import { FC } from 'react';

// Types
import { FooterColumn } from 'core/types/footer-column.type';

// Components
import FooterLink from '../FooterItem';

interface FooterColumnProps {
	column: FooterColumn;
}

const FooterColumnList: FC<FooterColumnProps> = ({ column }) => (
	<div className="footer__column">
		<h5 className="footer__column__title">{column.title}</h5>
		{column.items.map(item => (
			<FooterLink item={item} />
		))}
	</div>
);

export default FooterColumnList;
