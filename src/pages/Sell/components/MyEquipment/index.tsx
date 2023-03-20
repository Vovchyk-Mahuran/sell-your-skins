import { FC, useMemo } from 'react';
import SVG from 'react-inlinesvg';
import cx from 'classnames';

// Constants
import { mockSales } from 'constants/mockSales';
import { LAPTOP, LAPTOP_SM, MOBILE_SM, TABLET_LG, TABLET_SM } from 'constants/windowSIze';

// Images
import PrevIcon from 'assets/icons/previous.svg';
import NextIcon from 'assets/icons/next.svg';

// Hooks
import { usePagination } from 'shared/hooks/usePagination';
import { useResize } from 'shared/hooks/useResize';

// Components
import Input from 'shared/components/Input';
import SkinCard from 'shared/components/SkinCard';

// Styles
import './index.scss';
import './index.media.scss';

const MyEquipment: FC = () => {
	const { windowSize } = useResize();
	const itemsPerPage = useMemo(() => {
		switch (true) {
			case windowSize.width > LAPTOP || (windowSize.width <= LAPTOP_SM && windowSize.width >= TABLET_LG):
				return 15;
			case windowSize.width > TABLET_LG && windowSize.width <= LAPTOP:
				return 12;
			case windowSize.width < TABLET_LG && windowSize.width > TABLET_SM:
				return 8;
			case windowSize.width <= TABLET_SM && windowSize.width >= MOBILE_SM:
				return 6;
			default:
				return 3;
		}
	}, [windowSize.width]);
	const {
		allPages,
		displayedItems,
		changePage,
		moveBack,
		moveForward,
		firstIndex,
		lastIndex,
		totalItems,
		isFirstPage,
		isLastPage,
		page,
	} = usePagination({
		items: mockSales,
		itemsPerPage,
	});

	return (
		<div className="equipment">
			<Input classes="equipment__input" placeholder="Enter your Trade URL" />
			<div className="equipment__grid live-sales__skins-list">
				{displayedItems.map(skin => (
					<SkinCard key={skin.id} skin={skin} />
				))}
			</div>
			<div className="equipment__pagination pagination">
				<div className="pagination__buttons">
					<button
						onClick={moveBack}
						type="button"
						className={cx('pagination__button pagination__button--prev', { hidden: isFirstPage })}
					>
						<SVG src={PrevIcon} title="previous" />
					</button>
					{allPages.map(item => (
						<button
							onClick={() => changePage(item)}
							key={item}
							type="button"
							className={cx('pagination__button pagination__button--page', { active: item === page })}
						>
							{item}
						</button>
					))}
					<button
						onClick={moveForward}
						type="button"
						className={cx('pagination__button pagination__button--next', { hidden: isLastPage })}
					>
						<SVG src={NextIcon} title="next" />
					</button>
				</div>
				<div className="pagination__amount">
					Showing items {firstIndex + 1} - {lastIndex} out of {totalItems}
				</div>
			</div>
		</div>
	);
};

export default MyEquipment;
