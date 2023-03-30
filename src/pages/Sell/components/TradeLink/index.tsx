import { FC } from 'react';

// Hooks
import { useTradeLink } from 'shared/hooks/useTradeLink';

// Components
import Input from 'shared/components/Input';
import Button from 'shared/components/Button';

const TradeLink: FC = () => {
	const { url, changeUrl, updateTradeUrl, urlError } = useTradeLink();
	return (
		<div className="equipment__url">
			<Input
				value={url}
				onChange={changeUrl}
				onBlur={updateTradeUrl}
				classes="equipment__input"
				placeholder="Enter your Trade URL"
				errorMessage={urlError}
			/>
			<Button onClick={updateTradeUrl} btnText="Save" />
		</div>
	);
};

export default TradeLink;
