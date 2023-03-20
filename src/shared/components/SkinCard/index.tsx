import { FC } from 'react';
import cx from 'classnames';

// Types
import { Skin } from 'core/types/skin.type';

// Images
import MockSkin from 'assets/img/mock-skin.png';
// import Selected from 'assets/img/selected.webp';
// import Blocked from 'assets/img/blocked.webp';
import Thunder from 'assets/icons/thunder.svg';

// Styles
import './index.scss';

interface SkinCardProps {
	skin: Skin;
}

const SkinCard: FC<SkinCardProps> = ({ skin }) => {
	return (
		<div className={cx('skin', { [`skin--${skin.className}`]: skin.className })}>
			{/* TODO: add classname skin__blur--blocked for blocked items */}
			<div className="skin__blur">
				<div className="skin__header">
					<div className="skin__price">
						<img src={Thunder} alt="price" />
						<span>{skin.price} $</span>
					</div>
					<div className="skin__quality">{skin.quality}</div>
				</div>
				<div className="skin__img">
					<img src={MockSkin} alt="skin" />
				</div>
				<div className="skin__footer">
					<h6 className="skin__title">{skin.title}</h6>
					<span className={cx('skin__rarity', skin.className)}>{skin.rarity}</span>
				</div>
			</div>
			{/* TODO: integrate blocked and selected with be */}
			{/* <div className="skin__overlay skin__overlay--selected">
				<img src={Selected} alt="selected" />
			</div> */}
			{/* <div className="skin__overlay skin__overlay--blocked">
				<img src={Blocked} alt="blocked" />
			</div> */}
		</div>
	);
};

export default SkinCard;
