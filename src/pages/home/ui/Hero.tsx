import Image from "next/image";
import ImageHero from "../assets/hero.webp";

import { ActionControls } from "~/features/ActionControls/ui/ActionControls";
import { FeaturesList } from "./Features";
import { Background } from "./SectionBackground";
import { Heading } from "./Heading";
import { VideoAnimationPlayer } from "~/shared/ui/video-anim-player";

export function Hero() {
	return (
		<div className="flex flex-col rounded relative overflow-hidden px-[1rem] bg-black">
			<Background />

			<div className="flex flex-grow items-end justify-between gap-[1rem] relative w-full max-w-content m-auto">
				<div className="flex flex-col gap-[3rem] max-w-[35rem] w-full pb-[7.25rem] flex-shrink-0">
					<Heading className="text-[4.5rem]/[1.1]">
						Open your web3 storefront in seconds
					</Heading>

					<FeaturesList />
					<ActionControls />
				</div>

				<VideoAnimationPlayer
					className='flex-shrink-0 w-[48rem]'
					src='/videos/hero-anim.webm'
					srcHevc='/videos/hero-anim.mp4"'
				>
					<Image
						src={ImageHero}
						alt="Hero image"
						className="size-full"
						quality={100}
					/>
				</VideoAnimationPlayer>
			</div>
		</div>
	);
}
