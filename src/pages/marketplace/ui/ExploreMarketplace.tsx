import { Heading } from "~/shared/ui/heading";
import { cn } from "~/shared/lib/cn";
import { Carousel } from "~/pages/marketplace/ui/Carousel";
import { HTMLAttributes } from "react";
import { Store } from "~/shared/api/model";
import { StoreList } from "~/pages/marketplace/ui/StoreList";

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

				<StoreList initialData={initialData} />
			</div>
		</div>
	);
}
