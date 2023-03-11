import { FC } from 'react';
import ManualStepListItem from '../ManualStepListItem';

// Components

interface ManualStepListProps {
	items: string[];
}

const ManualStepList: FC<ManualStepListProps> = ({ items }) => (
	<ul className="step__list step-list">
		{items.map(item => (
			<ManualStepListItem key={item} item={item} />
		))}
	</ul>
);

export default ManualStepList;
