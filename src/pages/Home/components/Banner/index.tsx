import { FC } from 'react';

// Images
import BannerPlayer from 'assets/img/header-player.webp';
import PlayIcon from 'assets/icons/play-icon.svg';

// Components
import Button from 'shared/components/Button';

// Styles
import './index.scss';

const Banner: FC = () => (
	<div className="banner">
		<div className="container banner__container">
			<div className="banner__info">
				<h1 className="banner__title">
					Sell <span className="marked">CS:GO skins</span> for real money
					<span className="marked"> instantly!</span>
				</h1>
				<p className="banner__description">
					Securely get cash for your skins in seconds. Get the best prices for your items in a simple and
					quick transaction.
				</p>
				<div className="banner__buttons">
					<Button btnText="Try it now!" />
					<span className="banner__button button__separator">OR</span>
					<div className="banner__button button__watch">
						<div className="button__watch--play">
							<img src={PlayIcon} alt="Play" />
						</div>
						<span className="button__watch--text">Watch the tutorial</span>
					</div>
				</div>
			</div>
			<div className="banner__img">
				<img src={BannerPlayer} alt="banner player" />
			</div>
		</div>
	</div>
);

export default Banner;
