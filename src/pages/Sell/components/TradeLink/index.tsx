import { FC } from 'react';
import { Link } from 'react-router-dom';

// Hooks
import { useTradeLink } from 'shared/hooks/useTradeLink';

// Components
import Input from 'shared/components/Input';
import Button from 'shared/components/Button';

const TradeLink: FC = () => {
	const { url, changeUrl, updateTradeUrl, urlError } = useTradeLink();
	return (
		<div className="equipment__url">
			<Link target="_blank" to="http://steamcommunity.com/my/tradeoffers/privacy#trade_offer_access_url">
				Your <span className="marked">trade url:</span>
			</Link>
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
