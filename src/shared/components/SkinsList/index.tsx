import { FC } from 'react';
import cx from 'classnames';

// Types
import { Skin } from 'core/types/skin.type';

// Components
import SkinCard from '../SkinCard';

interface SkinsListProps {
	skins: Skin[];
	classes: string;
}

const SkinsList: FC<SkinsListProps> = ({ skins, classes }) => {
	return (
		<div className={cx('skins-list', classes)}>
			{skins.map(skin => (
				<SkinCard key={skin.id} skin={skin} />
			))}
		</div>
	);
};

export default SkinsList;
