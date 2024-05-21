'use client'

import { Heading } from "~/shared/ui/heading";
import { StoreCardItem } from "~/entities/store";
import { Pagination } from "~/shared/ui/kit/pagination";
import { cn } from "~/shared/lib/cn";
import { Carousel } from "~/pages/marketplace/ui/Carousel";
import { storeData } from "~/shared/api/store";

export function ExploreMarketplace({ className }: { className?: string }) {
	return (
		<div className={cn(
			`mx-auto space-y-24 flex flex-col flex-grow justify-between gap-[1rem] relative w-full`,
			className
		)}>
			<div className="space-y-12">
				<div className="space-y-4 max-w-content m-auto">
					<Heading>
						Explore marketplace
					</Heading>
					<div className="text-black-60 text-balance w-1/2">
						Discover a diverse range of one-of-a-kind shops you won&apos;t find anywhere else.
						From digital items to physical goods and unique services!
					</div>
				</div>

				<Carousel />

				<div className="grid grid-cols-2 gap-10 max-w-content m-auto">
					{storeData.map((store) => (
						<div key={store.id} className="w-full">
							<StoreCardItem store={store} />
						</div>
					))}
				</div>

				<Pagination
					className='max-w-content m-auto'
					count={190}
					pageSize={10}
					siblingCount={1}
					defaultPage={1}
				/>
			</div>
		</div>
	);
}
