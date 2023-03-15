import { FC, ReactNode } from 'react';

// Components
import Footer from 'pages/Footer';
import Header from 'pages/Header';

// Styles
import './index.scss';

interface LayoutProps {
	children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className="layout">
			<section className="layout__header home__banner-section">
				<Header />
			</section>
			<div className="layout__content">{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
