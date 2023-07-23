import { FC } from 'react';

// Enums
import { AvatarSize } from 'core/enums/avatar-size.enum';

// Types
import { LastSale } from 'core/types/last-sale.type';

// Components
import Avatar from 'shared/components/Avatar';

// Styles
import './index.scss';

interface LiveCardOverlayProps {
	details: LastSale;
}

const LiveCardOverlay: FC<LiveCardOverlayProps> = ({ details }) => {
	return (
		<div className="live-card-overlay overlay">
			<div className="overlay-player">
				<Avatar size={AvatarSize.SM} />
				<h5 className="overlay-player__name">{details.username}</h5>
			</div>
		</div>
	);
};

export default LiveCardOverlay;
