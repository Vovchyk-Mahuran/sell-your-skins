import { FC } from 'react';
import SVG from 'react-inlinesvg';
import { useAppDispatch, useAppSelector } from 'redux/root';

// Images
import SettingsIcon from 'assets/icons/settings.svg';
import CheckedIcon from 'assets/icons/checked.svg';
import BotNameIcon from 'assets/icons/bot.svg';
import SteamLevelIcon from 'assets/icons/chart.svg';
import AccountCreatedIcon from 'assets/icons/calendar.svg';

// Actions
import { getActiveTrade } from 'redux/user-service/actions';

// Components
import Button from 'shared/components/Button';
import TradeModal from 'shared/components/TradeModal';

// Styles
import './index.scss';
import './index.media.scss';
import { ROUTERS } from 'constants/routers';
import { Link } from 'react-router-dom';

interface ConfirmationTradeModalProps {
	isOpen: boolean;
}

const ConfirmationTradeModal: FC<ConfirmationTradeModalProps> = ({ isOpen }) => {
	const dispatch = useAppDispatch();
	const tradeInfo = useAppSelector(state => state.userStore.tradeInfo);

	const getTradeStatus = () => {
		dispatch(getActiveTrade(tradeInfo?.steam_trade_id));
	};

	return (
		<TradeModal
			isOpen={isOpen}
			statusIcon={SettingsIcon}
			modalTitle="Offer status"
			close={false}
			classes="status-modal"
		>
			<div className="status-modal__body status-body">
				<div className="status-body__alert alert-success">
					<SVG className="alert-success__icon" src={CheckedIcon} cacheRequests />
					<span className="alert-success__title">Offer sent!</span>
				</div>
				<p className="status-body__additional-info">
					We will send you an exchange offer. Press the button below and accept the offer.
				</p>
				<h5 className="status-body__title">Accept only offer from the link below</h5>
				<div className="status-body__bot-info bot-info">
					<div className="bot-info__option">
						<SVG className="bot-info__icon" cacheRequests src={BotNameIcon} />
						<span className="bot-info__key">Confirmation message: </span>
						<span className="bot-info__value">{tradeInfo?.confirmation_message}</span>
					</div>
					<div className="bot-info__option">
						<SVG className="bot-info__icon" cacheRequests src={BotNameIcon} />
						<span className="bot-info__key">Our bot&apos;s name: </span>
						<span className="bot-info__value">{tradeInfo?.bot_name}</span>
					</div>
					<div className="bot-info__option">
						<SVG className="bot-info__icon" cacheRequests src={SteamLevelIcon} />
						<span className="bot-info__key">Steam level: </span>
						<span className="bot-info__value">{tradeInfo?.bot_level}</span>
					</div>
					<div className="bot-info__option">
						<SVG className="bot-info__icon" cacheRequests src={AccountCreatedIcon} />
						<span className="bot-info__key">Account creation date: </span>
						<span className="bot-info__value">{tradeInfo?.bot_register_date}</span>
					</div>
				</div>
				<div className="status-body__confirmation">
					<Link
						onClick={getTradeStatus}
						target="_blank"
						to={ROUTERS.STEAM_TRADE(tradeInfo?.steam_trade_id)}
						className="button status-body__confirmation--browser"
						rel="noreferrer"
					>
						Confirm in browser
					</Link>
					<Button classes="status-body__confirmation--app" btnText="Confirm in steam application" />
				</div>
			</div>
		</TradeModal>
	);
};

export default ConfirmationTradeModal;
