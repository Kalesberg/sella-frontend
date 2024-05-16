"use client";

import { Feature } from "~/shared/api/model";
import { FeatureCard } from "~/entities/feature";

const featuresMock: Feature[] = [
	{
		title: "No KYC",
		description: "Who likes it anyway? Connect your wallet, reserve your unique seller's handle, open your storefront & begin selling!",
		imageUrl: "",
	},
	{
		title: "Sell Anything",
		description: "We believe in freedom of commerce, without restrictions. However, illegal or harmful items and services are not permitted!",
		imageUrl: "",
	},

	{
		title: "Feature Title 3",
		description: "Feature Description 3",
		imageUrl: "",
	},

	{
		title: "Feature Title 4",
		description: "Feature Description 4",
		imageUrl: "",
	},
	{
		title: "Feature Title 5",
		description: "Feature Description 5",
		imageUrl: "",
	},

	{
		title: "Feature Title 6",
		description: "Feature Description 6",
		imageUrl: "",
	},
];

export function SellaFeautes() {
	return (
		<div className="py-32">
			<div className=" mx-auto space-y-12 flex flex-col flex-grow justify-between gap-[1rem] relative w-[calc(100%-8.75rem*2)] m-auto pb-20">
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
				<div className="flex gap-10 flex-wrap justify-between ">
					{featuresMock.map((feature, index) => (
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
