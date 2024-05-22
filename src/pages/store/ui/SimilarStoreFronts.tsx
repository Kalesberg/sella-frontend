import { StoreCard, StoreLink } from "~/entities/store";
import { Heading } from "~/shared/ui/heading";
import { cn } from "~/shared/lib/cn";
import { StoreId } from "~/shared/api/model";
import { fetchSimilarStores } from "~/pages/store/api";

export async function SimilarStoreFronts({ className, storeId }: { className?: string, storeId: StoreId }) {
	const stores = await fetchSimilarStores(storeId)

	return (
		<div className={cn('flex flex-col gap-[3rem]', className)}>
			<Heading className='max-md:text-[2.625rem]'>Similar Storefronts</Heading>
			<div className='flex gap-10 max-md:flex-col'>
				{stores.map((store) => (
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
	)
}
