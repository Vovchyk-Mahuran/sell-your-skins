import { FC } from 'react';

// Components
import Button from 'shared/components/Button';

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
				<Button btnText="Try us now!" />
			</div>
		</div>
	</section>
);

export default TrustPilot;
