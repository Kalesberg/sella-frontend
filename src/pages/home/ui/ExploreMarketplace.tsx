"use client";

import { Store } from "~/shared/api/model";
import { ActionControls } from "./ActionControls";
import { StoreCard } from "~/entities/store";
import { Heading } from "./Heading";

const storeData: Store[] = [
	{
		id: 1,
		name: "Store Name",
		shortName: "@storename",
		isVerified: true,
		description: "Market, Limit, Stop Limit, and Auction Mode orders.",
		previewImage: null,
		rating: {
			likes: 45,
			dislikes: 16,
			reviewsCount: 673,
		},
	},
	{
		id: 2,
		name: "Store Name",
		shortName: "@storename",
		isVerified: true,
		description: "Market, Limit, Stop Limit, and Auction Mode orders.",
		previewImage: null,
		rating: {
			likes: 45,
			dislikes: 16,
			reviewsCount: 673,
		},
	},
	{
		id: 3,
		name: "Store Name",
		shortName: "@storename",
		isVerified: true,
		description: "Market, Limit, Stop Limit, and Auction Mode orders.",
		previewImage: null,
		rating: {
			likes: 45,
			dislikes: 16,
			reviewsCount: 673,
		},
	},
	{
		id: 4,
		name: "Store Name",
		shortName: "@storename",
		isVerified: true,
		description: "Market, Limit, Stop Limit, and Auction Mode orders.",
		previewImage: null,
		rating: {
			likes: 45,
			dislikes: 16,
			reviewsCount: 673,
		},
	},
	{
		id: 5,
		name: "Store Name",
		shortName: "@storename",
		isVerified: true,
		description: "Market, Limit, Stop Limit, and Auction Mode orders.",
		previewImage: null,
		rating: {
			likes: 45,
			dislikes: 16,
			reviewsCount: 673,
		},
	},
	{
		id: 6,
		name: "Store Name",
		shortName: "@storename",
		isVerified: true,
		description: "Market, Limit, Stop Limit, and Auction Mode orders.",
		previewImage: null,
		rating: {
			likes: 45,
			dislikes: 16,
			reviewsCount: 673,
		}
	},
];

export function ExploreMarketPlace() {
	return (
		<div className="py-32">
			<div className=" mx-auto space-y-24 flex flex-col flex-grow justify-between gap-[1rem] relative w-full max-w-content m-auto">
				<div className="space-y-12">
					<div className="space-y-4">
						<Heading>
							Explore marketplace
						</Heading>
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
		<div className="flex flex-col w-full gap-[1rem] py-14 rounded-[1.25rem] text-center bg-white/[.02]">
			<div className="text-5xl text-white font-semibold">
				No KYC, No Pesky Regulations
			</div>
			<div className="text-black-60 max-w-[33rem] mx-auto text-lg">
				Open your storefront in less than 30 seconds! Start by reserving your storefront handle
			</div>
			<div className="flex justify-center mt-[2rem]">
				<ActionControls />
			</div>
		</div>
	);
}