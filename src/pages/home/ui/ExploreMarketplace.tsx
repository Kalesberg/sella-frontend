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
		<div className="py-32">
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
		<div className="py-14 rounded-3xl text-center space-y-8 bg-[#ffffff0d]">
			<div className="text-5xl text-white font-semibold">
			No KYC, No Pesky Regulations
			</div>
			<div className="text-black-60 w-1/2 max-w-[33rem] mx-auto text-lg">
			Open your storefront in less than 30 seconds! Start by reserving your storefront handle
			</div>
			<div className="flex justify-center">
				<ActionControls />
			</div>
		</div>
	);
}
