import { FC } from 'react';

// Types
import { ITerm } from 'core/types/term.type';

// Styles
import './index.scss';

interface TermProps {
	term: ITerm;
}

const Term: FC<TermProps> = ({ term }) => {
	return (
		<div className="terms term">
			<h3 className="term__header">{term.title}</h3>
			<p className="term__description">{term.description}</p>
		</div>
	);
};

export default Term;
