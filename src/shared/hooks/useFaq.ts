import { useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';

// Constants
import { FAQ_DATA } from 'constants/FAQ';
import { FaqCategory } from 'core/enums/faq-category.enum';

// Types
import { FaqColumn } from 'core/types/faq-column.type';

// Images
import QuestionMarkIcon from 'assets/icons/question-mark.svg';
import DollarIcon from 'assets/icons/dollar.svg';
import ProblemsIcon from 'assets/icons/problems.svg';

// Utils
import { parseStringToUrl } from 'utils/parseStringToUrl';
import { parseUrlToString } from 'utils/parseUrlToString';

export const useFaq = () => {
	const { title } = useParams();

	const { general, payments, popular } = useMemo(() => {
		const general = FAQ_DATA.filter(question => question.category === FaqCategory.General).reverse();
		const payments = FAQ_DATA.filter(question => question.category === FaqCategory.Payments).reverse();
		const popular = FAQ_DATA.filter(question => question.category === FaqCategory.Popular).reverse();

		return { general, payments, popular };
	}, []);

	const faqColumns: FaqColumn[] = useMemo(
		() => [
			{ title: FaqCategory.General, links: general, icon: QuestionMarkIcon },
			{ title: FaqCategory.Payments, links: payments, icon: DollarIcon },
			{ title: FaqCategory.Popular, links: popular, icon: ProblemsIcon },
		],
		[general, payments, popular]
	);

	const getFaqLink = useCallback((value: string) => `/faq/${parseStringToUrl(value)}`, []);

	const activeElement = useMemo(
		() => FAQ_DATA.find(question => question.title === parseUrlToString(title || '')),
		[title]
	);

	return { faqColumns, getFaqLink, activeElement };
};
