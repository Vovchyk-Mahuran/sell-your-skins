import { FC } from 'react';

// Constants
import { TERMS_OF_USE } from 'constants/termsOfUse';

// Componenets
import Term from '../Term';

const TermsList: FC = () => {
	return (
		<>
			{TERMS_OF_USE.map(term => (
				<Term key={term.title} term={term} />
			))}
		</>
	);
};

export default TermsList;
