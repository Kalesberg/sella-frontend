import { PropsWithChildren } from "react";
import { Icons } from "~/shared/ui/icons";

export function FeaturesList() {
	return (
		<div className="flex flex-col gap-[1rem] max-w-[28.75rem]">
			<Feature label="Hassle Free">
				It takes about 30 seconds to get your storefront running
			</Feature>
			<Feature label="Sell Anything">
				From digital good, to physical items, services and anything else in
				between
			</Feature>
			<Feature label="No KYC">
				Connect your wallet, reserve your handle, open your storefront & accept
				in stables!
			</Feature>
			<Feature label="100% Free">
				Yup, it’s totally free to open up your storefront Sign up for a Premium
				tier to get more benefits!
			</Feature>
			<Feature label="Robust Escrow">
				We prioritize security of all parties involved. Our our focus is on
				providing a safe and fair environment for everyone
			</Feature>
			<Feature label="Powered by $SELLA">
				Unlock exclusive benefits by holding $SELLA. Share the platform&apos;s
				profits while enjoying a suite of premium perks.
			</Feature>
		</div>
	);
}

function Feature({ label, children }: PropsWithChildren<{ label: string }>) {
	return (
		<div className="flex gap-[0.75rem] items-center min-w-0">
			<Icons.CircleChecked className="text-accent-100 size-[1.25rem] flex-shrink-0" />
			<p className="truncate text-black-60">
				<span className="text-white">{label}</span> <span>— {children}</span>
			</p>
		</div>
	);
}
