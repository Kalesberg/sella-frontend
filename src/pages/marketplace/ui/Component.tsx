import { ExploreMarketplace } from "~/pages/marketplace/ui/ExploreMarketplace";
import { SellaMeTrustedInfluencers } from "~/widgets/SellaMeTrustedInfluencers";

export function Component() {
	return (
		<div>
			<ExploreMarketplace className='mb-[3rem]' />

			<SellaMeTrustedInfluencers className='max-w-content m-auto' />
		</div>
	);
}
