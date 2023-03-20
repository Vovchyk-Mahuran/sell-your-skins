import { FC } from 'react';

// Components
import MyEquipment from '../MyEquipment';
import PaymentMethods from '../PaymentMethods';

// Styles
import './index.scss';
import './index.media.scss';

const MySkins: FC = () => {
	return (
		<section className="my-skins container-xxl">
			<MyEquipment />
			<PaymentMethods />
		</section>
	);
};

export default MySkins;
