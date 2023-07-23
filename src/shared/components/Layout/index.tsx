import { FC, ReactNode } from 'react';
import cx from 'classnames';

// Components
import Footer from 'pages/Footer';
import Header from 'pages/Header';

// Styles
import './index.scss';

interface LayoutProps {
	children: ReactNode;
	classes?: string;
}

const Layout: FC<LayoutProps> = ({ children, classes }) => {
	return (
		<div className="layout">
			<section className="layout__header home__banner-section">
				<Header />
			</section>
			<div className={cx('layout__content', classes)}>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
