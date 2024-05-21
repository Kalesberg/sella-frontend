"use client";

import { StoreCardItem } from "~/entities/store";
import { Heading } from "~/shared/ui/heading";
import { SellaMeTrustedInfluencers } from "~/widgets/SellaMeTrustedInfluencers";
import { storeData } from "~/shared/api/store";

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

