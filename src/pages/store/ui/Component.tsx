import { fetchStore, fetchStoreProducts } from "../api";
import { Button } from "~/shared/ui/kit/button";
import { StoreCard } from "~/entities/store";
import { StoreId } from "~/shared/api/model";
import { StoreManageDialog } from "~/features/store/manage";
import { ProductsStream } from "./ProductsStream";
import { EditModeProvider } from "../model/edit-mode";
import { ToggleEditModeButton } from "./ToggleEditModeButton";
import { SellaMeTrustedInfluencers } from "~/widgets/SellaMeTrustedInfluencers";
import { SimilarStoreFronts } from "~/pages/store/ui/SimilarStoreFronts";
import { ReportShop } from "~/features/report-shop";

export async function Component({ storeId }: { storeId: StoreId }) {
	const store = await fetchStore(storeId);
	const products = await fetchStoreProducts(storeId);

	return (
		<div className='flex flex-col w-full max-w-content mx-auto max-md:px-4'>
			<EditModeProvider>
				<div className='flex mb-[4.5rem] items-end w-full gap-[1rem] justify-between max-md:mb-[3rem] max-md:flex-col max-md:items-start'>
					<StoreCard.Root store={store} className='p-0 border-none flex-grow max-md:flex max-md:flex-col max-md:items-start'>
						<StoreCard.Image />

						<StoreCard.Content>
							<StoreCard.Title className='text-[3rem]/[1.1] max-md:text-[2.625rem]' />
							<StoreCard.Description />
							<StoreCard.Rating />
						</StoreCard.Content>
					</StoreCard.Root>

					<div className='flex gap-[1rem]'>
						<StoreManageDialog
							store={store}
							triggerElement={
								<Button colorPalette='gray' size='lg'>
									Settings
								</Button>
							}
						/>
						<ToggleEditModeButton />

						<ReportShop />
					</div>
				</div>

				<ProductsStream className='mb-[6rem] max-md:mb-[5rem]' initialData={products} />
			</EditModeProvider>

			<SimilarStoreFronts className='mb-[6rem] max-md:mb-[3rem]'/>

			<SellaMeTrustedInfluencers />
		</div>
	);
}
