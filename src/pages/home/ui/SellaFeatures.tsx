"use client";

import { Feature } from "~/shared/api/model";
import { FeatureCard } from "~/entities/feature";

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
					<h1 className="text-5xl font-semibold text-white">
						Effortless Selling
					</h1>
					<div className="text-black-60 text-balance w-1/2">
						Unlike other platforms out there, we don&apos;t over
						complicate things. We strip away unnecessary complexity,
						focusing instead on what truly matters.
					</div>
				</div>
				<div className="flex gap-10 flex-wrap">
					{productData.map((feature, index) => (
						<FeatureCardItem
							key={index}
							feature={feature}
							index={index}
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
		<FeatureCard.Root feature={feature} style={{ width: width }}>
			<FeatureCard.Image
				height={100}
				width={100}
				style={{ height: height }}
			/>
			<FeatureCard.Content className="w-full">
				<FeatureCard.Title />
				<FeatureCard.Description />
			</FeatureCard.Content>
		</FeatureCard.Root>
	);
};
