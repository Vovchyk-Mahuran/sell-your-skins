import { FC } from 'react';
import cx from 'classnames';

// Styles
import './index.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	btnText: string;
	classes?: string;
	// onClick?: () => void;
	// disabled?: boolean;
	// type?: 'submit' | 'button';
}

const Button: FC<ButtonProps> = ({ btnText, classes, ...props }) => (
	// eslint-disable-next-line react/button-has-type
	<button {...props} className={cx('button', classes)}>
		{btnText}
	</button>
);

export default Button;
