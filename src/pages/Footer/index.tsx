import { FC } from 'react';

// Constants
import { FOOTER_LINKS } from 'constants/footerLinks';

// Images
import Logo from 'assets/img/logo.png';

// Components
import FooterColumn from './components/FooterColumn';
import FooterColumnMobile from './components/FooterColumnMobile';

// Styles
import './index.scss';
import './index.media.scss';

const Footer: FC = () => (
	<footer className="footer">
		<div className="container">
			<div className="footer__links">
				<div className="footer__column footer__column--info">
					<img src={Logo} alt="Logo" className="footer__logo" />
					<p className="footer__description">
						Crafted with passion by CS:GO enthusiasts and members of the community, SkinsDeals enables
						it&apos;s Users to easily and safely cash out since 2023 for the best prices on the market!
					</p>
				</div>
				{FOOTER_LINKS.map(column => (
					<FooterColumn key={column.title} column={column} />
				))}
				{FOOTER_LINKS.map(column => (
					<FooterColumnMobile key={column.title} column={column} />
				))}
			</div>
			<p className="footer__copyright">
				Copyright © 2023 SkinsDeals.com. All rights reserved. Powered by Steam, a registered trademark of Valve
				Corporation. Valve, the Valve logo, the Steam logo, Counter-Strike and the Counter-Strike logo are
				trademarks and/or registered trademarks of Valve Corporation. All other trademarks are property of their
				respective owners. SkinsDeals.com is in no way affiliated with or endorsed by Valve Corporation. This
				site is not affiliated with VALVE corp
			</p>
		</div>
	</footer>
);

export default Footer;
