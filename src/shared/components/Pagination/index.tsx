/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import SVG from 'react-inlinesvg';
import cx from 'classnames';

// Images
import PrevIcon from 'assets/icons/previous.svg';
import NextIcon from 'assets/icons/next.svg';

// Hooks
import { usePagination } from 'shared/hooks/usePagination';

// Styles
import './index.scss';
import './index.media.scss';

interface PaginationProps {
	classes?: string;
	items: any[];
	page: number;
	changePage: (page: number) => void;
	limit: number;
	siblingCount?: number;
}

const Pagination: FC<PaginationProps> = ({ classes, items, limit, page, changePage, siblingCount = 1 }) => {
	const {
		paginationRange,
		DOTS,
		firstIndex,
		lastIndex,
		totalItems,
		isFirstPage,
		isLastPage,
		canMoveBack,
		canMoveForward,
	} = usePagination({
		items,
		itemsPerPage: limit,
		page,
		siblingCount,
	});

	const moveBack = () => {
		if (canMoveBack) changePage(page - 1);
	};

	const moveForward = () => {
		if (canMoveForward) changePage(page + 1);
	};

	const clickDots = (index: number) => {
		if (index === 1) changePage(page - 2);
		else changePage(page + 2);
	};

	return (
		<div className={cx('pagination', classes)}>
			<div className="pagination__buttons">
				<button
					onClick={moveBack}
					type="button"
					className={cx('pagination__button pagination__button--prev', { hidden: isFirstPage })}
				>
					<SVG src={PrevIcon} title="previous" />
				</button>
				{paginationRange.map((item, index) => {
					return item !== DOTS ? (
						<button
							onClick={() => changePage(+item)}
							key={index}
							type="button"
							className={cx('pagination__button pagination__button--page', { active: +item === page })}
						>
							{item}
						</button>
					) : (
						<button
							key={index}
							onClick={() => clickDots(index)}
							type="button"
							className={cx('pagination__button pagination__button--page')}
						>
							&#8230;
						</button>
					);
				})}
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
	);
};

export default Pagination;
