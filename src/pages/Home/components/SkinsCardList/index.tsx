import { FC } from 'react';

// Constants
import { mockSales } from 'constants/mockSales';

// Components
import SkinCard from '../SkinCard';

const SkinsCardList: FC = () => (
	<div className="live-sales__skins-list skins__list">
		{mockSales.map(skin => (
			<SkinCard key={skin.id} skin={skin} />
		))}
	</div>
);

export default SkinsCardList;
