import { FC, useMemo } from 'react';
import cx from 'classnames';

// Types
import { Step } from 'core/types/step.type';

// Сomponents
import Button from 'shared/components/Button';
import ManualStepList from '../ManualStepList';

// Styles
import './index.scss';
import './index.media.scss';

interface ManualStepProps {
	step: Step;
	index: number;
}

const ManualStep: FC<ManualStepProps> = ({ step, index }) => {
	const isReverse = useMemo(() => !(index % 2), []);
	const stepNumber = useMemo(() => `0${index}`.slice(-2), []);

	return (
		<div className={cx('manual__step step', { [`step--${index}`]: index, reverse: isReverse })}>
			<div className={cx('container', { reverse: isReverse })}>
				<div className="step__info">
					<span className="step__number">{stepNumber}</span>
					<h3 className="step__title">{step.title}</h3>
					<p className="step__description">{step.description}</p>
					<ManualStepList items={step.list} />
					<Button btnText="Try it now!" />
				</div>
				<div className="step__img">
					<img src={step.img} alt={step.title} />
				</div>
			</div>
		</div>
	);
};

export default ManualStep;
