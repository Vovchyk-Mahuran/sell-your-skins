import { FC, useMemo } from 'react';
import cx from 'classnames';
import { getIn, useFormikContext } from 'formik';

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

const Input: FC<InputProps> = ({ classes, errorMessage, field, onChange, ...props }) => {
	const formikContext = useFormikContext();

	const error = useMemo(() => {
		if (errorMessage) return errorMessage;
		if (field) {
			const { name } = field;
			const state = getIn(formikContext?.touched, name);
			const message = getIn(formikContext?.errors, name);
			if (state || formikContext?.validateOnMount) return message;
		}
		return '';
	}, [formikContext?.touched, formikContext?.errors, errorMessage, field?.name, field?.value]);

	const showError = useMemo(() => {
		return formikContext && !formikContext?.validateOnMount ? formikContext?.touched && !!error : !!error;
	}, [formikContext, formikContext?.validateOnMount, formikContext?.touched, error]);

	return (
		<div className="input-wrapper">
			<input
				type="text"
				className={cx('input', classes, {
					invalid: showError,
				})}
				placeholder="Search"
				onChange={e => {
					formikContext?.setFieldValue(field?.name, e.target.value);
					formikContext?.setFieldTouched(field?.name, false);
					onChange?.();
				}}
				onBlur={() => formikContext.setFieldTouched(field?.name, true)}
				{...field}
				{...props}
			/>

			<span
				className={cx('input__error', {
					show: showError,
				})}
			>
				{error}
			</span>
			<img
				src={ErrorIcon}
				alt="Invalid Input"
				className={cx('input__error-icon', {
					show: showError,
				})}
			/>
		</div>
	);
};

export default Input;
