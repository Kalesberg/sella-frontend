import Image from "next/image";
import ImageHero from "../assets/hero.webp";

import { ActionControls } from "~/features/ActionControls";
import { FeaturesList } from "./Features";
import { Background } from "./SectionBackground";
import { VideoAnimationPlayer } from "~/shared/ui/video-anim-player";
import { Heading } from "~/shared/ui/kit/heading";

export function Hero() {
	return (
		<div className={"flex flex-col rounded relative overflow-hidden px-[1rem] bg-black rounded-b-[3rem]\
			max-md:top-[-10rem] max-md:pt-[9rem] max-md:mb-[-10rem]"}>
			<Background />

			<div className="flex flex-grow items-end justify-between gap-[1rem] relative w-full max-w-content m-auto max-lg:justify-center">
				<div className="flex flex-col gap-[3rem] max-w-[35rem] w-full pb-[7.25rem] flex-shrink-0">
					<Heading size='xl'>
						Open your web3 storefront in seconds
					</Heading>

					<FeaturesList />
					<ActionControls />
				</div>

				<VideoAnimationPlayer
					className='flex-shrink-0 w-[30rem] xl:w-[48rem] hidden lg:block'
					src='/videos/hero-anim.webm'
					srcHevc='/videos/hero-anim.mp4'
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
