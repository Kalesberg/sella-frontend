
type ImageEntry = string // url for now, but could be an object with different variants of resoultion or quality

export type StoreId = number;

export interface Store {
	id: StoreId,
	name: string,
	shortName: string,
	isVerified: boolean,
	description: string,
	previewImage: ImageEntry | null,

	rating: {
		value: number,
		reviewsCount: number
	}
}

export type ProductId = number;

export interface Product {
	id: ProductId,
	name: string,
	description: string | null,
	shortDescription: string,
	category: string,
	previewImage: ImageEntry | null,
	galleryImages: ImageEntry[],

	price: number
}

export interface Feature {
	title: string,
	description: string,
	imageUrl: string | null,
}