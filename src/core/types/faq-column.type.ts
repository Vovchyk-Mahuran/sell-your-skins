import { FaqCategory } from 'core/enums/faq-category.enum';
import { FaqItem } from './faq-item.type';

export interface FaqColumn {
	title: FaqCategory;
	links: FaqItem[];
	icon: string;
}
