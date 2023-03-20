import { FC } from 'react';

// Enums
import { AvatarSize } from 'core/enums/avatar-size.enum';

// Components
import Avatar from 'shared/components/Avatar';

// Styles
import './index.scss';

const LiveCardOverlay: FC = () => {
	return (
		<div className="live-card-overlay overlay">
			<div className="overlay-player">
				<Avatar size={AvatarSize.SM} />
				<h5 className="overlay-player__name">Mockname</h5>
				<span className="overlay-player__time">3 hours ago</span>
			</div>
		</div>
	);
};

export default LiveCardOverlay;
