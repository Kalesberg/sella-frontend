"use client";

import { Store } from "~/shared/api/model";
import { StoreCard, StoreLink } from "~/entities/store";
import { Heading } from "./Heading";
import { SellaMeTrustedInfluencers } from "~/widgets/SellaMeTrustedInfluencers";

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
		<StoreLink store={store}>
			<StoreCard.Root store={store}>
				<StoreCard.Image />
				<StoreCard.Content>
					<StoreCard.Title />
					<StoreCard.Description />
					<StoreCard.Rating />
				</StoreCard.Content>
			</StoreCard.Root>
		</StoreLink>
	);
};
