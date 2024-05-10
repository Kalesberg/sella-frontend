
type ImageEntry = string // url for now, but could be an object with different variants of resoultion or quality

export interface Store {
	id: number,
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

export interface Product {
	id: number,
	name: string,
	description: string | null,
	shortDescription: string,
	category: string,
	previewImage: ImageEntry | null,
	galleryImages: ImageEntry[],

	price: number
}