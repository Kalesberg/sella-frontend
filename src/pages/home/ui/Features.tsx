import { PropsWithChildren } from "react";
import { Icons } from "~/shared/ui/icons";

export function FeaturesList() {
	return (
		<div className="flex flex-col gap-[1rem] max-w-[28.75rem]">
			<Feature label="More order types">
				Market, Limit, Stop Limit, and Auction Mode orders.
			</Feature>

			<Feature label="Sells & withdrawals">
				Sell your crypto and withdraw to your bank.
			</Feature>

			<Feature label="Trade 200+ assets">
				From Bitcoin to Ethereum to your favorite tokens.
			</Feature>
		</div>
	);
}

function Feature({ label, children }: PropsWithChildren<{ label: string }>) {
	return (
		<div className="flex gap-[0.75rem] items-center min-w-0">
			<Icons.CircleChecked className="text-accent-100 size-[1.65rem] flex-shrink-0" />
			<p className="truncate text-black-60 flex flex-col">
				<span className="text-white font-bold text-lg">{label}</span>

				<span> {children}</span>
			</p>
		</div>
	);
}
