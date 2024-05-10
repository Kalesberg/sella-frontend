"use client";

import { ProductCard } from "~/entities/product";
import { Product } from "~/shared/api/model";
import { ActionControls } from "./AdminControls";

const productData: Product[] = [
	{
		title: "Product Title 1",
		description: "Product Description 1",
		category: "Product Category 1",
		imageUrl: "",
		price: {
			value: 10.99,
			currencyCode: "usdt",
		},
	},
	{
		title: "Product Title 2",
		description: "Product Description 2",
		category: "Product Category 2",
		imageUrl: "",
		price: {
			value: 10.99,
			currencyCode: "usdt",
		},
	},

	{
		title: "Product Title 3",
		description: "Product Description 3",
		category: "Product Category 3",
		imageUrl: "",
		price: {
			value: 10.99,
			currencyCode: "usdt",
		},
	},

	{
		title: "Product Title 4",
		description: "Product Description 4",
		category: "Product Category 4",
		imageUrl: "",
		price: {
			value: 10.99,
			currencyCode: "usdt",
		},
	},
	{
		title: "Product Title 5",
		description: "Product Description 5",
		category: "Product Category 5",
		imageUrl: "",
		price: {
			value: 10.99,
			currencyCode: "usdt",
		},
	},

	{
		title: "Product Title 6",
		description: "Product Description 6",
		category: "Product Category 6",
		imageUrl: "",
		price: {
			value: 10.99,
			currencyCode: "usdt",
		},
	},

	{
		title: "Product Title 7",
		description: "Product Description 7",
		category: "Product Category 7",
		imageUrl: "",
		price: {
			value: 10.99,
			currencyCode: "usdt",
		},
	},

	{
		title: "Product Title 8",
		description: "Product Description 8",
		category: "Product Category 8",
		imageUrl: "",
		price: {
			value: 10.99,
			currencyCode: "usdt",
		},
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
					{productData.map((product, index) => (
						<ProductCardItem key={index} product={product} />
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
