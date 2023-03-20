import { FC } from 'react';
import cx from 'classnames';

// Styles
import './index.scss';

interface InputProps {
	[props: string]: any;
	classes?: string;
}

const Input: FC<InputProps> = ({ classes, ...props }) => {
	return <input type="text" className={cx('input', classes)} placeholder="Search" {...props} />;
};

export default Input;
