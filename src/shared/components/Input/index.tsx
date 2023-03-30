import { FC } from 'react';
import cx from 'classnames';

// Images
import ErrorIcon from 'assets/icons/error.svg';

// Styles
import './index.scss';

interface InputProps {
	[props: string]: any;
	classes?: string;
	errorMessage?: string;
	valid?: boolean;
}

const Input: FC<InputProps> = ({ classes, errorMessage, valid, ...props }) => {
	return (
		<div className="input-wrapper">
			<input
				type="text"
				className={cx('input', classes, { invalid: !!errorMessage, valid })}
				placeholder="Search"
				{...props}
			/>

			<span className={cx('input__error', { show: !!errorMessage })}>{errorMessage}</span>
			<img src={ErrorIcon} alt="Invalid Input" className={cx('input__error-icon', { show: !!errorMessage })} />
		</div>
	);
};

export default Input;
