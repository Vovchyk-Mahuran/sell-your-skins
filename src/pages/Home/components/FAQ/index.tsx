import { FC, useState } from 'react';

// Constants
import { FAQ_DATA } from 'constants/FAQ';

// Accordion
import Accordion from 'shared/components/Accordion';

// Styles
import './index.scss';

const FAQ: FC = () => {
	const [selectedId, setSelectedId] = useState<string>('');

	const toggleSelected = (id: string) => {
		setSelectedId(prev => (prev === id ? '' : id));
	};

	return (
		<section className="faq">
			<div className="container">
				<h2 className="faq__title text-center">Frequently asked questions</h2>
				<p className="text-center faq__description">
					Here are the answers to some of your most commonly asked questions. Looking for something else?{' '}
					<a className="faq__link" href="mailto:@gmail.com">
						Get in touch with us!
					</a>
				</p>
				<div className="faq__accordion">
					{FAQ_DATA.map(question => (
						<Accordion
							toggleSelected={toggleSelected}
							isOpen={selectedId === question.id}
							key={question.id}
							id={question.id}
							title={question.title}
							content={question.content}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
