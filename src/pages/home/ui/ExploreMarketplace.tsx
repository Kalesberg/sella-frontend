"use client";

import { Heading } from "~/shared/ui/kit/heading";
import { StoreCard, StoreLink } from "~/entities/store";
import { SellaMeTrustedInfluencers } from "~/widgets/sella-me-trusted-influencers";
import { storeData } from "~/shared/api/store";

export function ExploreMarketPlace() {
	return (
		<div id='explore' className="py-32 px-4">
			<div className="mx-auto space-y-24 flex flex-col flex-grow justify-between gap-[1rem] relative w-full max-w-content m-auto">
				<div className="space-y-12">
					<div className="space-y-4">
						<Heading size='lg'>
							Explore marketplace
						</Heading>

						<div className="text-black-60 text-balance w-full md:w-1/2 xl:w-1/3">
							Discover a diverse range of one-of-a-kind shops you
							won&apos;t find anywhere else. From digital items to
							physical goods and unique services!
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
						{storeData.map(store => (
							<StoreLink key={store.id} store={store}>
								<StoreCard.Composed 
									store={store} 
									className='w-full mx-auto'
								/>
							</StoreLink>
						))}
					</div>
				</div>
				<SellaMeTrustedInfluencers />
			</div>
		</div>
	);
}
