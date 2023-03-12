import { FC, useMemo } from 'react';
import cx from 'classnames';

// Types
import { FooterColumn } from 'core/types/footer-column.type';

// Components
import FooterLink from '../FooterItem';

interface FooterColumnProps {
	column: FooterColumn;
}

const FooterColumnList: FC<FooterColumnProps> = ({ column }) => {
	const columnClassname = useMemo(() => `footer__column--${column.title.toLowerCase()}`, []);

	return (
		<div className={cx('footer__column footer__column--desktop', { [columnClassname]: column.title })}>
			<h5 className="footer__column__title">{column.title}</h5>
			{column.items.map(item => (
				<FooterLink key={item.title} item={item} />
			))}
		</div>
	);
};

export default FooterColumnList;
