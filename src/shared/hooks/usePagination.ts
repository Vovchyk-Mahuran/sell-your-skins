import { useMemo, useState } from 'react';

interface usePaginationProps {
	items: any[];
	itemsPerPage: number;
}

export const usePagination = ({ items, itemsPerPage }: usePaginationProps) => {
	const [page, setPage] = useState(1);

	const totalItems = useMemo(() => items.length, [items.length]);

	const totalPages = useMemo(() => Math.ceil(totalItems / itemsPerPage), [totalItems, itemsPerPage]);

	const isFirstPage = useMemo(() => page === 1, [page]);

	const isLastPage = useMemo(() => page === totalPages, [page, totalPages]);

	const lastIndex = useMemo(
		() => (isLastPage ? totalItems : itemsPerPage * page),
		[isLastPage, itemsPerPage, page, totalItems]
	);

	const firstIndex = useMemo(
		() => (isLastPage ? itemsPerPage * (page - 1) : lastIndex - itemsPerPage),
		[isLastPage, lastIndex, itemsPerPage]
	);

	const allPages = useMemo(() => [...Array(totalPages)].map((_item, index) => index + 1), [totalPages, itemsPerPage]);

	const displayedItems = useMemo(() => items.slice(firstIndex, lastIndex), [firstIndex, lastIndex, itemsPerPage]);

	const moveBack = () => {
		if (page > 1) {
			setPage(prev => prev - 1);
		}
	};

	const moveForward = () => {
		if (page < totalPages) {
			setPage(prev => prev + 1);
		}
	};

	const changePage = (index: number) => {
		setPage(index);
	};

	return {
		page,
		totalPages,
		lastIndex,
		firstIndex,
		allPages,
		moveBack,
		moveForward,
		changePage,
		displayedItems,
		totalItems,
		isFirstPage,
		isLastPage,
	};
};
