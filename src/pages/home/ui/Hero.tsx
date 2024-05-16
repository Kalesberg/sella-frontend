import Image from "next/image";
import ImageHero from "../assets/hero.png";
import { ActionControls } from "./ActionControls";
import { FeaturesList } from "./Features";
import { Background } from "./SectionBackground";
import { Heading } from "./Heading";

export function Hero() {
	return (
		<div className="flex flex-col rounded relative overflow-hidden px-[1rem] pt-[5rem] bg-black">
			<Background />

			<div className="flex flex-grow items-end justify-between gap-[1rem] relative w-full max-w-content m-auto">
				<div className="flex flex-col gap-[3rem] max-w-[35rem] w-full pb-[7.25rem]">
					<Heading className="text-[4.5rem]/[1.1]">
						Open your web3 storefront in seconds
					</Heading>

					<FeaturesList />
					<ActionControls />
				</div>

				<Image
					src={ImageHero}
					alt="Hero image"
					className="w-[35rem] h-full"
				/>
			</div>
		</div>
	);
}
