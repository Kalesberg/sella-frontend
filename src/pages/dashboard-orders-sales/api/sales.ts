import dayjs from "dayjs";
import { Product, Sale } from "~/shared/api/model";

const product: Product = {
	id: 1,
	name: 'Product Name',
	description: 'Market, Limit, Stop Limit, and Auction Mode orders.',
	shortDescription: 'Market, Limit, Stop Limit, and Auction Mode orders.',
	previewImage: null,
	galleryImages: [],
	category: 'Category',
	price: 2.99
}


export interface SalesResponse {
	data: Sale[],
	total: number,
	totalSalesPaid: number,
	totalOrders: number
}

export async function fetchSales(): Promise<SalesResponse> {
	return {
		data: [
			{
				id: 1,
				user: {
					name: 'Jonh Appleseed'	
				},
				product,
				transaction: {
					status: 'new',
					fulfillmentStatus: '-',
					totalPaid: 328,
					transactionUrl: '',
					createdAt: dayjs('May 3, 4:27 PM 2024'),
				}
			},
			{
				id: 2,
				user: {
					name: 'Andrew Lawton'	
				},
				product,
				transaction: {
					status: 'new',
					fulfillmentStatus: '-',
					totalPaid: 279,
					transactionUrl: '',
					createdAt: dayjs('May 2, 4:11 PM 2024'),
				}
			},
			{
				id: 3,
				user: {
					name: 'Jonh Appleseed'	
				},
				product,
				transaction: {
					status: 'new',
					fulfillmentStatus: 'fulfilled',
					totalPaid: 328,
					transactionUrl: '',
					createdAt: dayjs('May 2, 4:10 PM 2024'),
				}
			},
			{
				id: 4,
				user: {
					name: 'Andrew Lawton'	
				},
				product,
				transaction: {
					status: 'new',
					fulfillmentStatus: 'fulfilled',
					totalPaid: 279,
					transactionUrl: '',
					createdAt: dayjs('May 2, 1:42 PM 2024'),
				}
			},
			{
				id: 5,
				user: {
					name: 'Jonh Appleseed'	
				},
				product,
				transaction: {
					status: 'new',
					fulfillmentStatus: 'fulfilled',
					totalPaid: 328,
					transactionUrl: '',
					createdAt: dayjs('May 2, 3:42 PM 2024'),
				}
			},
			{
				id: 6,
				user: {
					name: 'Andrew Lawton'	
				},
				product,
				transaction: {
					status: 'paid',
					fulfillmentStatus: 'fulfilled',
					totalPaid: 279,
					transactionUrl: '',
					createdAt: dayjs('May 2, 3:42 PM 2024'),
				}
			},
			{
				id: 7,
				user: {
					name: 'Jonh Appleseed'	
				},
				product,
				transaction: {
					status: 'paid',
					fulfillmentStatus: 'fulfilled',
					totalPaid: 328,
					transactionUrl: '',
					createdAt: dayjs('May 2, 3:42 PM 2024'),
				}
			},
			{
				id: 8,
				user: {
					name: 'Andrew Lawton'	
				},
				product,
				transaction: {
					status: 'paid',
					fulfillmentStatus: 'fulfilled',
					totalPaid: 279,
					transactionUrl: '',
					createdAt: dayjs('May 2, 3:42 PM 2024'),
				}
			},
			{
				id: 9,
				user: {
					name: 'Jonh Appleseed'	
				},
				product,
				transaction: {
					status: 'paid',
					fulfillmentStatus: 'fulfilled',
					totalPaid: 328,
					transactionUrl: '',
					createdAt: dayjs('May 2, 3:42 PM 2024'),
				}
			},
			{
				id: 10,
				user: {
					name: 'Andrew Lawton'	
				},
				product,
				transaction: {
					status: 'paid',
					fulfillmentStatus: 'fulfilled',
					totalPaid: 279,
					transactionUrl: '',
					createdAt: dayjs('May 2, 3:42 PM 2024'),
				}
			}
		],
		total: 20,
		totalOrders: 20,
		totalSalesPaid: 4510
	}
} 