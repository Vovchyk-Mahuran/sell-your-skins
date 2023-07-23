import { FaqCategory } from 'core/enums/faq-category.enum';

export interface FaqItem {
	id: string;
	title: string;
	category: FaqCategory;
	content: string;
}
