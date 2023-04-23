import { FC } from 'react';
import cx from 'classnames';

// Components
import ButtonLoader from '../ButtonLoader';

// Styles
import './index.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	btnText: string;
	classes?: string;
	isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({ btnText, isLoading = false, classes, ...props }) => {
	return (
		// eslint-disable-next-line react/button-has-type
		<button {...props} disabled={props.disabled || isLoading} className={cx('button', classes)}>
			{!isLoading ? btnText : <ButtonLoader />}
		</button>
	);
};

export default Button;
