import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/root';

// Constants
import { ROUTERS } from 'constants/routers';
import { StorageKeys } from 'constants/storageKeys';

// Selectors
import { selectorIsAuth } from 'redux/user-service/selector';

// Actions
import { getUserData } from 'redux/user-service/actions';
import { signIn } from 'redux/user-service/reducer';
import { getLastSoldItems } from 'redux/inventory-service/actions';

// Pages
import HomePage from 'pages/Home';
import Faq from 'pages/FAQ';
import FaqElement from 'pages/FaqElement';
import SellPage from 'pages/Sell';
import AboutUs from 'pages/AboutUs';
import TermsOfUse from 'pages/TermsOfUse';
import PrivacyPolice from 'pages/PrivacyPolice';
import ContactUs from 'pages/ContactUs';
import TutorialItem from 'pages/TutorialItem';

function App() {
	const dispatch = useAppDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	const isAuth = useAppSelector(selectorIsAuth);
	const urlParams = new URLSearchParams(location.search);
	const authToken = urlParams.get(StorageKeys.AUTH_TOKEN);

	useEffect(() => {
		dispatch(getLastSoldItems());
		if (isAuth) {
			dispatch(getUserData());
		}
	}, [isAuth]);

	useEffect(() => {
		if (authToken) {
			Cookies.set(StorageKeys.AUTH_TOKEN, authToken, {
				expires: 30,
			});
			navigate(ROUTERS.SELL);
			dispatch(signIn());
		}
	}, [authToken]);

	return (
		<div className="App">
			<Routes>
				<Route path={ROUTERS.HOME} element={isAuth ? <Navigate to={ROUTERS.SELL} /> : <HomePage />} />
				<Route path={ROUTERS.SELL} element={isAuth ? <SellPage /> : <Navigate to={ROUTERS.HOME} />} />
				<Route path={ROUTERS.FAQ} element={<Faq />} />
				<Route path={ROUTERS.FAQ_ID} element={<FaqElement />} />
				<Route path={ROUTERS.ABOUT_US} element={<AboutUs />} />
				<Route path={ROUTERS.TERMS_OF_USE} element={<TermsOfUse />} />
				<Route path={ROUTERS.PRIVACY_POLICE} element={<PrivacyPolice />} />
				<Route path={ROUTERS.CONTACT_US} element={<ContactUs />} />
				<Route path={ROUTERS.TUTORIAL_ITEM} element={<TutorialItem />} />
				<Route
					path={ROUTERS.NOT_FOUND}
					element={isAuth ? <Navigate to={ROUTERS.SELL} /> : <Navigate to={ROUTERS.HOME} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
