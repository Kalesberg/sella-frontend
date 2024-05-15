"use client";

import { Feature } from "~/shared/api/model";
import { FeatureCard } from "~/entities/Feature";

const productData: Feature[] = [
	{
		title: "Product Title 1",
		description: "Product Description 1",
		imageUrl: "",
	},
	{
		title: "Product Title 2",
		description: "Product Description 2",
		imageUrl: "",
	},

	{
		title: "Product Title 3",
		description: "Product Description 3",
		imageUrl: "",
	},

	{
		title: "Product Title 4",
		description: "Product Description 4",
		imageUrl: "",
	},
	{
		title: "Product Title 5",
		description: "Product Description 5",
		imageUrl: "",
	},

	{
		title: "Product Title 6",
		description: "Product Description 6",
		imageUrl: "",
	},
];

export function SellaFeautes() {
	return (
		<div className="py-32 bg-neutral-900 ">
			<div className="max-w-screen-xl mx-auto space-y-12">
				<div className="space-y-4">
					<div className="text-5xl text-white">Explore marketplace</div>
					<div className="text-black-60 text-balance w-1/3">
						Join 40M+ people using Linktree for their link in bio. One link to
						help you share everything you create.
					</div>
				</div>
				<div className="flex gap-10 flex-wrap">
					{productData.map((feature, index) => (
						<FeatureCardItem
							index={index}
							key={index} feature={feature}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

const FeatureCardItem = ({
	feature,
	index,
}: {
	feature: Feature;
	index: number;
}) => {
	const width = index < 2 ? "48%" : "22%";
	const height = index < 2 ? "17rem" : "auto";

	return (
		<FeatureCard.Root feature={feature} className={`w-[${width}]`}>
			<FeatureCard.Image height={100} width={100} className={`h-[${height}]`} />
			<FeatureCard.Content className="w-full">
				<FeatureCard.Title />
				<FeatureCard.Description />
			</FeatureCard.Content>
		</FeatureCard.Root>
	);
};
