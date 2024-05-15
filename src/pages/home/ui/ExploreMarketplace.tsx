"use client";

import { Store } from "~/shared/api/model";
import { ActionControls } from "./ActionControls";
import { StoreCard } from "~/entities/store";

const storeData: Store[] = [
	{
		title: "Store Name",
		name: "@storename",
		isVerified: true,
		description: "Market, Limit, Stop Limit, and Auction Mode orders.",
		imageUrl: null,
		rating: {
			likes: 45,
			dislikes: 16,
			reviewsCount: 673,
		},
	},
	{
		title: "Store Name",
		name: "@storename",
		isVerified: true,
		description: "Market, Limit, Stop Limit, and Auction Mode orders.",
		imageUrl: null,
		rating: {
			likes: 45,
			dislikes: 16,
			reviewsCount: 673,
		},
	},
	{
		title: "Store Name",
		name: "@storename",
		isVerified: true,
		description: "Market, Limit, Stop Limit, and Auction Mode orders.",
		imageUrl: null,
		rating: {
			likes: 45,
			dislikes: 16,
			reviewsCount: 673,
		},
	},
	{
		title: "Store Name",
		name: "@storename",
		isVerified: true,
		description: "Market, Limit, Stop Limit, and Auction Mode orders.",
		imageUrl: null,
		rating: {
			likes: 45,
			dislikes: 16,
			reviewsCount: 673,
		},
	},
	{
		title: "Store Name",
		name: "@storename",
		isVerified: true,
		description: "Market, Limit, Stop Limit, and Auction Mode orders.",
		imageUrl: null,
		rating: {
			likes: 45,
			dislikes: 16,
			reviewsCount: 673,
		},
	},
	{
		title: "Store Name",
		name: "@storename",
		isVerified: true,
		description: "Market, Limit, Stop Limit, and Auction Mode orders.",
		imageUrl: null,
		rating: {
			likes: 45,
			dislikes: 16,
			reviewsCount: 673,
		},
	},
];

export function ExploreMarketPlace() {
	return (
		<div className="py-32 bg-[#FFFFFF05]  ">
			<div className=" mx-auto space-y-24 flex flex-col flex-grow justify-between gap-[1rem] relative w-[calc(100%-8.75rem*2)] m-auto">
				<div className="space-y-12">
					<div className="space-y-4">
						<h1 className="text-5xl text-white font-semibold">
							Explore marketplace
						</h1>
						<div className="text-black-60 text-balance w-1/3">
							Join 40M+ people using Linktree for their link in
							bio. One link to help you share everything you
							create.
						</div>
					</div>
					<div className="grid grid-cols-2 gap-10">
						{storeData.map((store, index) => (
							<div key={index} className="w-full">
								<StoreCardItem store={store} />
							</div>
						))}
					</div>
				</div>
				<SellaMeTrustedInfluencers />
			</div>
		</div>
	);
}

const StoreCardItem = ({ store }: { store: Store }) => {
	return (
		<StoreCard.Root store={store}>
			<StoreCard.Image />
			<StoreCard.Content>
				<StoreCard.Title />
				<StoreCard.Description />
				<StoreCard.Rating />
			</StoreCard.Content>
		</StoreCard.Root>
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
				Join 40M+ people using Linktree for their link in bio. One link
				to help you share everything you create.
			</div>
			<div className="flex justify-center">
				<ActionControls />
			</div>
		</div>
	);
}
