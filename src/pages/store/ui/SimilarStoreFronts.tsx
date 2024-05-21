import { StoreCardItem } from "~/entities/store";
import { Store } from "~/shared/api/model";
import { Heading } from "~/shared/ui/heading";
import { cn } from "~/shared/lib/cn";

const storeData: Store[] = [
	{
		id: 1,
		name: "Store Name",
		shortName: "@storename",
		isVerified: true,
		description: "Market, Limit, Stop Limit, and Auction Mode orders.",
		previewImage: null,
		rating: {
			likes: 45,
			dislikes: 16,
			reviewsCount: 673,
		},
	},
	{
		id: 2,
		name: "Store Name",
		shortName: "@storename",
		isVerified: true,
		description: "Market, Limit, Stop Limit, and Auction Mode orders.",
		previewImage: null,
		rating: {
			likes: 45,
			dislikes: 16,
			reviewsCount: 673,
		},
	},
]

export function SimilarStoreFronts({ className }: { className?: string }) {

	return (
		<div className={cn('flex flex-col gap-[3rem]', className)}>
			<Heading>Similar Storefronts</Heading>
			<div className='flex gap-10'>
				{storeData.map((store) => (
					<StoreCardItem key={store.id} store={store}/>
				))}
			</div>
		</div>
	)
}