export interface Store {
	title: string,
	name: string,
	isVerified: boolean,
	description: string,
	imageUrl: string | null,

	rating: {
		value: number,
		reviewsCount: number
	}
}

export interface Product {
	title: string,
	description: string,
	category: string,
	imageUrl: string | null,

	price: {
		value: number,
		currencyCode: 'usdt'
	}
}

export interface Feature {
	title: string,
	description: string,
	imageUrl: string | null,
}
