import { FC } from 'react';
import cx from 'classnames';

// Types
import { Skin } from 'core/types/skin.type';

// Images
import MockSkin from 'assets/img/mock-skin.png';
import Thunder from 'assets/icons/thunder.svg';

// Styles
import './index.scss';

interface SkinCardProps {
	skin: Skin;
}

const SkinCard: FC<SkinCardProps> = ({ skin }) => (
	<div className={cx('skin', { [`skin--${skin.className}`]: skin.className })}>
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
);

export default SkinCard;
