import { FC } from 'react';
import cx from 'classnames';

// Styles
import './index.scss';

interface ButtonProps {
	btnText: string;
	classes?: string;
}

const Button: FC<ButtonProps> = ({ btnText, classes }) => (
	<button type="button" className={cx('button', classes)}>
		{btnText}
	</button>
);

export default Button;
