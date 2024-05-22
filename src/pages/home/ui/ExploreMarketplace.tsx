"use client";

import { Heading } from "~/shared/ui/kit/heading";
import { StoreCard, StoreLink } from "~/entities/store";
import { SellaMeTrustedInfluencers } from "~/widgets/SellaMeTrustedInfluencers";
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
								<StoreCard.Root
									className='w-full mx-auto'
									store={store}
								>
									<StoreCard.ImageDesktop />
									<StoreCard.Content>
										<StoreCard.Title>
											<StoreCard.ImageMobile />
										</StoreCard.Title>
										<StoreCard.Description />
										<StoreCard.Rating />
									</StoreCard.Content>
								</StoreCard.Root>
							</StoreLink>
						))}
					</div>
				</div>
				<SellaMeTrustedInfluencers />
			</div>
		</div>
	);
}

// function SellaMeTrustedInfluencers() {
// 	return (
// 		<div className="flex flex-col w-full gap-[1rem] py-14 rounded-[1.25rem] text-center bg-white/[.02] px-[1.5rem]">
// 			<Heading>
// 				No KYC, No Pesky Regulations
// 			</Heading>
// 			<p className="text-black-60 max-w-[33rem] mx-auto text-lg">
// 				Open your storefront in less than 30 seconds! Start by reserving
// 				your storefront handle
// 			</p>
// 			<ActionControls className='justify-center mt-[2rem] w-full' />
// 		</div>
// 	);
// }
