import { FC } from 'react';

// Images
import ListMarker from 'assets/icons/list-marker.svg';

interface ManualStepListItemProps {
	item: string;
}

const ManualStepListItem: FC<ManualStepListItemProps> = ({ item }) => (
	<li className="step-list__item">
		<img src={ListMarker} alt="skin" />
		{item}
	</li>
);

export default ManualStepListItem;
