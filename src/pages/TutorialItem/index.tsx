import { FC } from 'react';

// Hooks
import { useTutorialItem } from 'shared/hooks/useTutorialItem';

// Components
import Layout from 'shared/components/Layout';

// Styles
import './index.scss';
import './index.media.scss';

const TutorialItem: FC = () => {
	const { activeElement } = useTutorialItem();

	if (!activeElement) return null;

	return (
		<section className="tutorial-item">
			<Layout classes="container">
				<h2 className="tutorial__title">{activeElement.title}</h2>
				<div className="tutorial__content">
					<p className="tutorial__description">{activeElement.description}</p>
					<img className="tutorial__img" src={activeElement.img} alt={activeElement.title} />
				</div>
			</Layout>
		</section>
	);
};

export default TutorialItem;
