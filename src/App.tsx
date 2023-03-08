import { Navigate, Route, Routes } from 'react-router-dom';

// Constants
import { ROUTERS } from 'constants/routers';

// Pages
import HomePage from 'pages/Home';
import AboutUsPage from 'pages/AboutUs';
import HelpPage from 'pages/Help';

// Styles
import './App.scss';

function App() {
	return (
		<Routes>
			<Route path={ROUTERS.HOME} element={<HomePage />} />
			<Route path={ROUTERS.ABOUT_US} element={<AboutUsPage />} />
			<Route path={ROUTERS.HELP} element={<HelpPage />} />
			<Route path={ROUTERS.NOT_FOUND} element={<Navigate to={ROUTERS.HOME} />} />
		</Routes>
	);
}

export default App;
