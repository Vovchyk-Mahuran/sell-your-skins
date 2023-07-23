import { FC } from 'react';
import cx from 'classnames';

// Images
import MockSkin from 'assets/img/mock-skin.png';
import Selected from 'assets/img/selected.webp';
import Blocked from 'assets/img/blocked.webp';
import Thunder from 'assets/icons/thunder.svg';

// Types
import { Skin } from 'core/types/skin.type';
import { LastSale } from 'core/types/last-sale.type';

// Styles
import './index.scss';
import { useSkinCard } from 'shared/hooks/useSkinCard';

interface SkinCardProps {
	skin: Skin & LastSale & any;
}

const SkinCard: FC<SkinCardProps> = ({ skin }) => {
	const { isBlocked, isSelected, skinStyles, selectItem } = useSkinCard(skin);

	return (
		<div className={cx('skin', { 'skin--blocked': isBlocked })} style={skinStyles} onClick={selectItem}>
			<div className={cx('skin__blur', { 'skin__blur--blocked': !skin.price })}>
				<div className="skin__header">
					<div className="skin__price">
						<img src={Thunder} alt="price" />
						<span>{skin.price} $</span>
					</div>
				</div>
				<div className="skin__img">
					<img src={skin.icon_url || skin.image || MockSkin} alt="skin" />
				</div>
				<div className="skin__footer">
					<h6 className="skin__title">{skin.market_hash_name}</h6>
				</div>
			</div>
			{isSelected && (
				<div className="skin__overlay skin__overlay--selected">
					<img src={Selected} alt="selected" />
				</div>
			)}
			{isBlocked && (
				<div className="skin__overlay skin__overlay--blocked">
					<img src={Blocked} alt="blocked" />
				</div>
			)}
		</div>
	);
};

export default SkinCard;
