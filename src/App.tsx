import { Navigate, Route, Routes } from 'react-router-dom';

// Constants
import { ROUTERS } from 'constants/routers';

// Pages
import HomePage from 'pages/Home';
import AboutUsPage from 'pages/AboutUs';
import HelpPage from 'pages/Help';
import HowToSellPage from 'pages/HowToSellSkins';
import Faq from 'pages/FAQ';
import FaqElement from 'pages/FaqElement';
import SellPage from 'pages/Sell';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path={ROUTERS.HOME} element={<HomePage />} />
				<Route path={ROUTERS.HOW_TO_SELL_SKINS} element={<HowToSellPage />} />
				<Route path={ROUTERS.ABOUT_US} element={<AboutUsPage />} />
				<Route path={ROUTERS.HELP} element={<HelpPage />} />
				<Route path={ROUTERS.FAQ} element={<Faq />} />
				<Route path={ROUTERS.FAQ_ID} element={<FaqElement />} />
				<Route path={ROUTERS.SELL} element={<SellPage />} />
				<Route path={ROUTERS.NOT_FOUND} element={<Navigate to={ROUTERS.HOME} />} />
			</Routes>
		</div>
	);
}

export default App;
