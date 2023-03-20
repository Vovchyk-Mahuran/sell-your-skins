import { FC } from 'react';
import cx from 'classnames';

// Styles
import './index.scss';

interface ButtonProps {
	btnText: string;
	classes?: string;
	onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ btnText, classes, onClick }) => (
	<button onClick={onClick} type="button" className={cx('button', classes)}>
		{btnText}
	</button>
);

export default Button;
