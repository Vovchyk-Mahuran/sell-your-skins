// Libs
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'redux/root';

// Components
import ScrollToTop from 'shared/components/ScrollToTop';
import App from './App';

// Web Vitals
import reportWebVitals from './reportWebVitals';

// Styles
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<ScrollToTop />
			<App />
		</BrowserRouter>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
