/* eslint-disable no-nested-ternary */
import { FC } from 'react';

// Hooks
import { useEquipmentPage } from 'shared/hooks/useEquipmentPage';

// Components
import SkinsList from 'shared/components/SkinsList';
import Spinner from 'shared/components/Spinner';
import Pagination from 'shared/components/Pagination';
import TradeLink from '../TradeLink';

// Styles
import './index.scss';
import './index.media.scss';

const MyEquipment: FC = () => {
	const { displayedItems, inventory, page, changePage, itemsPerPage, isLoading } = useEquipmentPage();

	return (
		<div className="equipment">
			<TradeLink />
			{isLoading ? (
				<div className="equipment__loader">
					<Spinner />
				</div>
			) : !!displayedItems.length ? (
				<>
					<SkinsList skins={displayedItems} classes="equipment__grid live-sales__skins-list" />
					<Pagination
						classes="equipment__pagination"
						items={inventory}
						page={page}
						changePage={changePage}
						limit={itemsPerPage}
					/>
				</>
			) : (
				<p className="equipment__empty">You don&apos;t have any items</p>
			)}
		</div>
	);
};

export default MyEquipment;
