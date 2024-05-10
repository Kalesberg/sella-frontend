import Image from "next/image";
import { PropsWithChildren } from "react";
import { Icons } from "~/shared/ui/icons";
import { ActionControls } from "./AdminControls";
import EscrowImage from "../assets/escrow.png";
import { FeaturesList } from "./Features";
import { Button } from "~/shared/ui/kit/button";

export function CreateStore() {
	return (
		<div className="flex flex-col relative h-[56.25rem] overflow-hidden rounded-b-[3rem] px-[1rem] pt-[10.375rem] bg-[#FFFFFF05]">
			<div className="flex flex-grow justify-between gap-[1rem] relative w-[calc(100%-8.75rem*2)] m-auto">
				<div className="flex flex-col gap-[3rem] max-w-[35rem] w-full">
					<div className="flex flex-col gap-[1.5rem]">
						<h1 className="font-semibold text-[3.2rem] font-manrope leading-[1.1]">
							Create your online store and start selling
						</h1>

						<p className="text-black-60 ">
							Join 40M+ people using Linktree for their link in bio. One link to
							help you share everything you create.
						</p>
					</div>

					<FeaturesList />

					<ActionControls />
				</div>

				<Image
					src={EscrowImage}
					alt="Escrow image"
					className="h-[37rem]"
					width={1000}
					height={1000}
				/>
			</div>
		</div>
	);
}
