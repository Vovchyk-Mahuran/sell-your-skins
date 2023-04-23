import { FC } from 'react';
import { Field } from 'formik';

// Types
import { PaymentSystem } from 'core/types/payment-system.type';

// Components
import Input from 'shared/components/Input';

interface PaymentInfoProps {
	selected: PaymentSystem;
}

const PaymentInfo: FC<PaymentInfoProps> = ({ selected }) => {
	return (
		<div className="payment-methods__info">
			{selected.fields.map(field => (
				<div key={field.name}>
					<label htmlFor={field.name}>{field.label}:</label>
					<Field
						autoComplete="off"
						type={field.type}
						name={field.name}
						placeholder={field.placeholder}
						component={Input}
					/>
				</div>
			))}
		</div>
	);
};

export default PaymentInfo;
