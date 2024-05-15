import Image from "next/image";
import HeroImage from "../assets/hero.png";
import { ActionControls } from "./AdminControls";
import { FeaturesList } from "./Features";

export function Hero() {
	return (
		<div className="flex flex-col relative h-[56.25rem] overflow-hidden px-[1rem] pt-[10.375rem]">
			<Background />

			<div className="flex flex-grow justify-between gap-[1rem] relative w-[calc(100%-8.75rem*2)] m-auto">
				<div className="flex flex-col gap-[3rem] max-w-[35rem] w-full">
					<h1 className="font-semibold text-[4.5rem] font-manrope leading-[1.1]">
						Create your online store and start selling
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

function Background() {
	return (
		<div className="absolute top-0 left-0 w-full h-full">
			<div
				className="absolute top-[-10rem] w-full h-[calc(100%+10rem)] opacity-50"
				style={{
					background:
						"radial-gradient(79.06% 66.04% at 0% 100%, rgb(53, 53, 53) 0%, rgb(15, 15, 15) 100%)",
				}}
			/>
			<div
				className="absolute top-[-10rem] w-full h-[calc(100%+10rem)] opacity-50"
				style={{
					background:
						"radial-gradient(87.01% 70.71% at 100% 100%, rgb(254, 200, 5, 0.4) 0%, rgb(223, 39, 39, 0.1) 50%, transparent 100%)",
				}}
			/>
		</div>
	);
}
