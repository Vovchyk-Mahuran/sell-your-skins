import { FC } from 'react';
import cx from 'classnames';

// Enums
import { AvatarSize } from 'core/enums/avatar-size.enum';

// Images
import UnknownUserIcon from 'assets/img/unknown-user.jpg';

// Styles
import './index.scss';

interface AvatarProps {
	src?: string;
	classes?: string;
	size?: AvatarSize;
}

const Avatar: FC<AvatarProps> = ({ src, classes, size = AvatarSize.LG }) => {
	return (
		<div className={cx('avatar', classes, `avatar--${size}`)}>
			<img className="avatar__img" src={src || UnknownUserIcon} alt="avatar" />
		</div>
	);
};

export default Avatar;
