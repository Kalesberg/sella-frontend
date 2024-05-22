import { fetchMyStorefronts } from "../api";
import { Button } from "~/shared/ui/kit/button";
import { StoreCard, StoreLink } from "~/entities/store";
import { Heading } from "~/shared/ui/kit/heading";
import { StoreCreateDialog } from "~/features/store/create";

export async function Component() {
	const stores = await fetchMyStorefronts();

	return (
		<div className='flex flex-col w-full gap-[3rem] max-w-content mx-auto px-[1rem]'>
			<div className='flex items-start w-full gap-[1rem] justify-between max-md:flex-col'>
				<Heading>
					My Storefronts
				</Heading>

				<StoreCreateDialog
					triggerElement={
						<Button className='max-sm:w-full' size='lg'>
							Add Storefront
						</Button>
					}
				/>
			</div>

			<div className='grid grid-cols-2 max-sm:grid-cols-1 gap-[2.5rem]'>
				{stores.map(s => (
					<StoreLink store={s} key={s.id}>
						<StoreCard.Composed store={s} />
					</StoreLink>
				))}
			</div>
		</div>
	);
}