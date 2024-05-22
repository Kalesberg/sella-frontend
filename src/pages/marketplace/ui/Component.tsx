import { ExploreMarketplace } from "~/pages/marketplace/ui/ExploreMarketplace";
import { SellaMeTrustedInfluencers } from "~/widgets/sella-me-trusted-influencers";
import { fetchStores } from "~/pages/store/api";

export async function Component() {
	const stores = await fetchStores();

	return (
		<div className='px-4'>
			<ExploreMarketplace
				className='mb-[3rem]'
				initialData={stores}
			/>

			<SellaMeTrustedInfluencers
				className='max-w-content m-auto'
			/>
		</div>
	);
}
