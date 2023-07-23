import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'redux/root';
import { Formik, Form, Field } from 'formik';

// Hooks
import { useTradeLink } from 'shared/hooks/useTradeLink';

// Actions
import { updateTradeUrlError } from 'redux/user-service/reducer';

// Validation
import { updateTradeLinkValidation } from 'core/validation/updateTradeLink.validation';

// Components
import Input from 'shared/components/Input';
import Button from 'shared/components/Button';

const TradeLink: FC = () => {
	const dispatch = useAppDispatch();
	const { url, urlError, updateTradeUrl, isLoading } = useTradeLink();
	const initialValues = { url };

	return (
		<div className="equipment__url">
			<Link target="_blank" to="http://steamcommunity.com/my/tradeoffers/privacy#trade_offer_access_url">
				Your <span className="marked">trade url:</span>
			</Link>
			<Formik
				enableReinitialize
				initialValues={initialValues}
				validationSchema={updateTradeLinkValidation}
				onSubmit={updateTradeUrl}
			>
				<Form>
					<Field
						name="url"
						errorMessage={urlError}
						classes="equipment__input"
						placeholder="Enter your Trade URL"
						component={Input}
						onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
							updateTradeUrl({ url: e.target.value });
						}}
						onChange={() => {
							dispatch(updateTradeUrlError());
						}}
					/>
					<Button isLoading={isLoading} type="submit" btnText="Save" />
				</Form>
			</Formik>
		</div>
	);
};

export default TradeLink;
