import { FC } from 'react';

// Contants
import { MANUAL_STEPS } from 'constants/manualSteps';

// Components
import ManualStep from '../ManualStep';

// Styles
import './index.scss';

const Manual: FC = () => (
	<section className="manual">
		<h2 className="manual__title text-center">
			Learn <span className="marked text-underlined">how easy</span> it is to sell skins
		</h2>
		{MANUAL_STEPS.map((step, index) => (
			<ManualStep step={step} index={index + 1} />
		))}
	</section>
);

export default Manual;
