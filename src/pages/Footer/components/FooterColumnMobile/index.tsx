import { FC, useState } from 'react';

// Types
import { FooterColumn } from 'core/types/footer-column.type';

// Components
import Accordion from 'shared/components/Accordion';
import FooterLink from '../FooterItem';

interface FooterColumnProps {
	column: FooterColumn;
}

const FooterColumnMobile: FC<FooterColumnProps> = ({ column }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="footer__column footer__column--mobile">
			<Accordion title={column.title} isOpen={isOpen} withArrow setIsOpen={setIsOpen}>
				{column.items.map(link => (
					<li className="footer-list__item" key={link.title}>
						<FooterLink item={link} />
					</li>
				))}
			</Accordion>
		</div>
	);
};

export default FooterColumnMobile;
