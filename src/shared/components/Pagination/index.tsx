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

interface PaginationProps {
	classes?: string;
	items: any[];
	limit: number;
}

const Pagination: FC<PaginationProps> = ({ classes, items, limit }) => {
	const {
		allPages,
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
		items,
		itemsPerPage: limit,
	});

	return (
		<div className={cx('pagination', classes)}>
			<div className="pagination__buttons">
				<button
					onClick={moveBack}
					type="button"
					className={cx('pagination__button pagination__button--prev', { hidden: isFirstPage })}
				>
					<SVG src={PrevIcon} title="previous" className="" />
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
					<SVG src={NextIcon} title="next" className="" />
				</button>
			</div>
			<div className="pagination__amount">
				Showing items {firstIndex + 1} - {lastIndex} out of {totalItems}
			</div>
		</div>
	);
};

export default Pagination;
