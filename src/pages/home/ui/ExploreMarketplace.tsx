"use client";

import { ProductCard } from "~/entities/product";
import { Product } from "~/shared/api/model";
import { ActionControls } from "./AdminControls";

const productData: Product[] = [
	{
		id: 1,
		name: "Product Title 1",
		description: "Product Description 1",
		shortDescription: "Product Short Description 1",
		category: "Product Category 1",
		previewImage: null,
		galleryImages: [],
		price: 10.99,

	},
	{
		id: 2,
		name: "Product Title 2",
		description: "Product Description 2",
		shortDescription: "Product Short Description 2",
		category: "Product Category 2",
		previewImage: null,
		galleryImages: [],
		price: 0.99,
	},
	{
		id: 3,
		name: "Product Title 3",
		description: "Product Description 3",
		shortDescription: "Product Short Description 3",
		category: "Product Category 3",
		previewImage: null,
		galleryImages: [],
		price: 10.99,
	},
	{
		id: 4,
		name: "Product Title 4",
		description: "Product Description 4",
		shortDescription: "Product Short Description 4",
		category: "Product Category 4",
		previewImage: null,
		galleryImages: [],
		price: 10.99,
	},
	{
		id: 5,
		name: "Product Title 5",
		description: "Product Description 5",
		shortDescription: "Product Short Description 5",
		category: "Product Category 5",
		previewImage: null,
		galleryImages: [],
		price: 10.99,
	},
	{
		id: 6,
		name: "Product Title 6",
		description: "Product Description 6",
		shortDescription: "Product Short Description 6",
		category: "Product Category 6",
		previewImage: null,
		galleryImages: [],
		price: 10.99,
	},
	{
		id: 7,
		name: "Product Title 7",
		description: "Product Description 7",
		shortDescription: "Product Short Description 7",
		category: "Product Category 7",
		previewImage: null,
		galleryImages: [],
		price: 10.99,
	},
	{
		id: 8,
		name: "Product Title 8",
		description: "Product Description 8",
		shortDescription: "Product Short Description 8",
		category: "Product Category 8",
		previewImage: null,
		galleryImages: [],
		price: 10.99,
	},
];

export function ExploreMarketPlace() {
	return (
		<div className="py-32 bg-[#FFFFFF05] ">
			<div className="max-w-screen-xl mx-auto space-y-12">
				<div className="space-y-4">
					<div className="text-5xl text-white">Explore marketplace</div>
					<div className="text-black-60 text-balance w-1/3">
						Join 40M+ people using Linktree for their link in bio. One link to
						help you share everything you create.
					</div>
				</div>
				<div className="grid grid-cols-4 gap-8">
					{productData.map(product => (
						<ProductCardItem
							key={product.id}
							product={product}
						/>
					))}
				</div>
				<SellaMeTrustedInfluencers />
			</div>
		</div>
	);
}

const ProductCardItem = ({ product }: { product: Product }) => {
	return (
		<ProductCard.Root product={product}>
			<ProductCard.Image height={100} width={100} />
			<ProductCard.Content className="w-full">
				<ProductCard.Title />
				<ProductCard.Description />
				<ProductCard.Category />
				<ProductCard.Price />
			</ProductCard.Content>
		</ProductCard.Root>
	);
};

function SellaMeTrustedInfluencers() {
	return (
		<div className="bg-[#FFFFFF05] py-10 rounded-3xl text-center space-y-8">
			<div className="text-5xl text-white font-semibold">
				Sella.me trusted by 40M+
				<div className="text-yellow-400">influencers</div>
			</div>
			<div className="text-neutral-500 w-1/2 max-w-[33rem] mx-auto text-lg">
				Join 40M+ people using Linktree for their link in bio. One link to help
				you share everything you create.
			</div>
			<div className="flex justify-center">
				<ActionControls />
			</div>
		</div>
	);
}
