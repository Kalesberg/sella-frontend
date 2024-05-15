import Image from "next/image";
import hero from "../assets/hero.png";
import { FeaturesList } from "./Features";
import { Button } from "~/shared/ui/kit/button";
import { Background } from "./SectionBackground";
import { Icons } from "~/shared/ui/icons";
import { PropsWithChildren } from "react";
import { ActionControls } from "./ActionControls";

export function CreateStore() {
	return (
		<div className="flex flex-col relative h-[56.25rem] overflow-hidden rounded-b-[3rem] px-[1rem] pt-[10.375rem] rounded-[3rem] m-5">
			<Background />
			<div className="flex flex-grow justify-between gap-[1rem] relative w-[calc(100%-8.75rem*2)] m-auto">
				<div className="flex flex-col gap-[3rem] max-w-[35rem] w-full">
					<div className="flex flex-col gap-[1.5rem]">
						<h1 className="font-semibold text-[3.2rem] font-manrope leading-[1.1]">
							Open your web3 storefront in seconds
						</h1>

						<p className="text-black-60">
							Become a globally accessible seller, and start your digital
							business today!
						</p>
					</div>

					<CreateStoreFeatures />

					<ActionControls />
				</div>

				<Image
					src={hero}
					alt="Escrow image"
					className="w-[35rem]"
					width={1000}
					height={1000}
				/>
			</div>
		</div>
	);
}

function CreateStoreFeatures() {
	return (
		<div className="flex flex-col gap-[1.8rem] max-w-[25rem]">
			<Feature label="Hassle Free">
				It takes about 30 seconds to get your storefront running
			</Feature>
			<Feature label="Sell Anything">
				From digital goods, to physical items, services and anything else in
				between
			</Feature>
			<Feature label="100% Free">
				Enjoy free usage with no hidden fees — only 1% deducted from each
				successful trade
			</Feature>
		</div>
	);
}

function Feature({ label, children }: PropsWithChildren<{ label: string }>) {
	return (
		<div className="flex gap-[0.75rem] items-center min-w-0">
			<Icons.Tick className="text-accent-100 size-[2.1rem] flex-shrink-0" />
			<p className=" text-black-60 flex flex-col">
				<span className="text-white font-semibold text-lg">{label}</span>{" "}
				<span>{children}</span>
			</p>
		</div>
	)
}
