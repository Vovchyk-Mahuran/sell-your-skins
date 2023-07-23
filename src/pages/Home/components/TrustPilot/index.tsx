import { FC } from 'react';

// Components
import SteamLink from 'shared/components/SteamLink';

// Styles
import './index.scss';
import './index.media.scss';

const TrustPilot: FC = () => (
	<section className="trust-pilot">
		<div className="container">
			<div className="trust-pilot__banner">
				<h4 className="trust-pilot__title">
					Getting money for your CS:GO skins doesn&apos;t have to be hard and annoying!
				</h4>
				<SteamLink text="Try us now" />
			</div>
		</div>
	</section>
);

export default TrustPilot;
