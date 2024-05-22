import { Heading } from "~/shared/ui/heading";
import { cn } from "~/shared/lib/cn";
import { Carousel } from "~/pages/marketplace/ui/Carousel";
import { HTMLAttributes } from "react";
import { Store } from "~/shared/api/model";
import { StoreCard, StoreLink } from "~/entities/store";
import { Pagination } from "~/shared/ui/kit/pagination";

type ExploreMarketplaceProps = HTMLAttributes<HTMLDivElement> & {
	initialData: Store[]
}

export function ExploreMarketplace({ initialData, className, ...props }: ExploreMarketplaceProps) {
	return (
		<div
			className={cn(
				`mx-auto space-y-24 flex flex-col flex-grow justify-between gap-[1rem] relative w-full`,
				className
			)}
			{...props}
		>
			<div className="space-y-12">
				<div className="space-y-4 max-w-content m-auto px-4">
					<Heading className="text-[2.625rem]">
						Explore marketplace
					</Heading>
					<div className="text-black-60 text-balance w-1/2 max-md:w-full max-md:text-wrap">
						Discover a diverse range of one-of-a-kind shops you won&apos;t find anywhere else.
						From digital items to physical goods and unique services!
					</div>
				</div>

				<Carousel className="max-md:px-4" />

				<div className="grid grid-cols-2 gap-10 max-w-content m-auto max-md:grid-cols-1 px-4">
					{initialData.map((store) => (
						<div key={store.id} className="w-full">
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
						</div>
					))}
				</div>

				{/*TODO mobile pagination*/}
				<Pagination
					className="max-w-content m-auto max-md:max-w-full max-md:mx-4 max-md:overflow-auto"
					count={190}
					pageSize={10}
					siblingCount={1}
					defaultPage={1}
				/>
			</div>
		</div>
	);
}
