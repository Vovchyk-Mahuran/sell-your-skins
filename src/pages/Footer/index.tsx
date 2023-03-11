import { FC } from 'react';

// Constants
import { FOOTER_LINKS } from 'constants/footerLinks';

// Images
import Logo from 'assets/icons/logo.svg';

// Components
import FooterColumn from './FooterColumn';

// Styles
import './index.scss';

const Footer: FC = () => (
	<footer className="footer">
		<div className="container">
			<div className="footer__links">
				<div className="footer__column">
					<img src={Logo} alt="Logo" className="footer__logo" />
					<p className="footer__description">
						Crafted with passion by CS:GO enthusiasts and members of the community, SellYourSkins enables
						its Users to easily and safely cash out since 2018 for the best prices on the market!
					</p>
				</div>
				{FOOTER_LINKS.map(column => (
					<FooterColumn column={column} />
				))}
			</div>
			<p className="footer__copyright">
				Copyright © 2019 - 2023 SellYourSkins.com. All rights reserved. Powered by Steam, a registered trademark
				of Valve Corporation. Valve, the Valve logo, the Steam logo, Counter-Strike and the Counter-Strike logo
				are trademarks and/or registered trademarks of Valve Corporation. All other trademarks are property of
				their respective owners. SellYourSkins.com is in no way affiliated with or endorsed by Valve
				Corporation. This site is not affiliated with VALVE corp
			</p>
		</div>
	</footer>
);

export default Footer;
