import Image from "next/image";
import HeroImage from "../assets/hero.png";
import { PropsWithChildren } from "react";
import { Icons } from "~/shared/ui/icons";
import { ActionControls } from "./ActionControls";
import { FeaturesList } from "./Features";
import { Background } from "./SectionBackground";

export function Hero() {
	return (
		<div className="flex flex-col relative h-[56.25rem] overflow-hidden px-[1rem] pt-[10.375rem]">
			<Background />

			<div className="flex flex-grow justify-between gap-[1rem] relative w-[calc(100%-8.75rem*2)] m-auto">
				<div className="flex flex-col gap-[3rem] max-w-[35rem] w-full">
					<h1 className="font-semibold text-[4.5rem] font-manrope leading-[1.1]">
						Open your web3 storefront in seconds
					</h1>

					<FeaturesList />
					<ActionControls />
				</div>

				<Image
					src={HeroImage}
					alt="Hero image"
					className="w-[35rem]"
					width={1000}
					height={1000}
				/>
			</div>
		</div>
	);
}
