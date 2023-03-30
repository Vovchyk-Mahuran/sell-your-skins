import { useMemo } from 'react';

interface usePaginationProps {
	items: any[];
	itemsPerPage: number;
	siblingCount?: number;
	page?: number;
}

const range = (start: number, end: number) => {
	const length = end - start + 1;

	return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({ items, itemsPerPage, siblingCount = 1, page = 1 }: usePaginationProps) => {
	const DOTS = '...';

	const totalItems = useMemo(() => items.length, [items.length]);

	const displayedPages = siblingCount + 5;

	const totalPages = useMemo(() => Math.ceil(totalItems / itemsPerPage), [totalItems, itemsPerPage]);

	const isFirstPage = useMemo(() => page === 1, [page]);

	const isLastPage = useMemo(() => page === totalPages, [page, totalPages]);

	const lastIndex = useMemo(
		() => (isLastPage ? totalItems : itemsPerPage * page),
		[isLastPage, itemsPerPage, page, totalItems]
	);

	const canMoveBack = useMemo(() => page > 1, [page, items, itemsPerPage]);
	const canMoveForward = useMemo(() => page < totalPages, [page, totalPages, items, itemsPerPage]);

	const firstIndex = useMemo(
		() => (isLastPage ? itemsPerPage * (page - 1) : lastIndex - itemsPerPage),
		[isLastPage, lastIndex, itemsPerPage]
	);

	const displayedItems = useMemo(
		() => items.slice(firstIndex, lastIndex),
		[firstIndex, lastIndex, itemsPerPage, items]
	);

	const paginationRange = useMemo(() => {
		if (displayedPages >= totalPages) {
			return range(1, totalPages);
		}

		const leftSiblingIndex = Math.max(page - siblingCount, 1);
		const rightSiblingIndex = Math.min(page + siblingCount, totalPages);
		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPages - 2;
		const firstPageIndex = 1;
		const lastPageIndex = totalPages;

		if (!shouldShowLeftDots && shouldShowRightDots) {
			const leftItemCount = 3 + 2 * siblingCount;
			const leftRange = range(1, leftItemCount);

			return [...leftRange, DOTS, totalPages];
		}

		if (shouldShowLeftDots && !shouldShowRightDots) {
			const rightItemCount = 3 + 2 * siblingCount;
			const rightRange = range(totalPages - rightItemCount + 1, totalPages);
			return [firstPageIndex, DOTS, ...rightRange];
		}

		if (shouldShowLeftDots && shouldShowRightDots) {
			const middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
		}

		return [];
	}, [page, displayedPages, siblingCount, totalItems, itemsPerPage, totalPages]);

	return {
		page,
		totalPages,
		lastIndex,
		firstIndex,
		displayedItems,
		totalItems,
		isFirstPage,
		isLastPage,
		paginationRange,
		DOTS,
		canMoveForward,
		canMoveBack,
	};
};
