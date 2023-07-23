import { FC } from 'react';

// Hooks
import { useSkinsStyles } from 'shared/hooks/useSkinsStyles';

// Types
import { LastSale } from 'core/types/last-sale.type';

// Components
import LiveCardOverlay from '../LiveCardOverlay';
import LiveCardItem from '../LiveCardItem';

// Styles
import './index.scss';

interface LiveCardProps {
	details: LastSale;
}

const LiveCard: FC<LiveCardProps> = ({ details }) => {
	const { skinStyles } = useSkinsStyles(details.name_color);
	return (
		<div className="live-card" style={skinStyles}>
			<LiveCardOverlay details={details} />
			<LiveCardItem details={details} />
		</div>
	);
};

export default LiveCard;
