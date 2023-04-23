import { IField } from './field.type';

export interface PaymentSystem {
	src: string;
	title: string;
	min: number;
	processingTime: string;
	fee: number;
	fixedFee: number;
	fields: IField[];
}
