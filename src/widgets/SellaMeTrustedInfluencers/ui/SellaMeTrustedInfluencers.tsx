import { ActionControls } from "~/features/ActionControls";
import { cn } from "~/shared/lib/cn";

export function SellaMeTrustedInfluencers({ className }: { className?: string }) {
	return (
		<div className={cn("flex flex-col w-full gap-[1rem] py-14 rounded-[1.25rem] text-center bg-white/[.02]", className)}>
			<div className="text-5xl text-white font-semibold">
				No KYC, No Pesky Regulations
			</div>
			<div className="text-black-60 max-w-[33rem] mx-auto text-lg">
				Open your storefront in less than 30 seconds! Start by reserving your storefront handle
			</div>
			<div className="flex justify-center mt-[2rem]">
				<ActionControls />
			</div>
		</div>
	);
}
