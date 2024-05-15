import Image from "next/image";
import EscrowImage from "../assets/escrow.png";
import { FeaturesList } from "./Features";
import { Button } from "~/shared/ui/kit/button";
import { Background } from "./SectionBackground";
import { Icons } from "~/shared/ui/icons";
import { PropsWithChildren } from "react";

export function EscrowBuyerSeller() {
	return (
		<div className="flex flex-col relative h-[56.25rem] overflow-hidden rounded-b-[3rem] px-[1rem] pt-[10.375rem] rounded-[3rem] m-5 ">
			<Background />
			<div className="flex flex-grow justify-between gap-[1rem] relative w-[calc(100%-8.75rem*2)] m-auto pb-20 ">
				<div className="flex flex-col gap-[3rem] max-w-[35rem] w-full ">
					<div className="flex flex-col gap-[1.5rem]">
						<h1 className="font-semibold text-[3.2rem] font-manrope leading-[1.1]">
							Escrow at the Core
						</h1>

						<p className="text-black-60">
							Escrow refers to a neutral third party that holds
							something of value usually cash until a transaction
							between a buyer and seller is complete.
						</p>
					</div>

					<EscrowFeatures />

					<Button className="w-44" size="lg">
						Open Storefront
					</Button>
				</div>

				<Image
					src={EscrowImage}
					alt="Escrow image"
					className="w-[35rem]"
					width={1000}
					height={1000}
				/>
			</div>
		</div>
	);
}

function EscrowFeatures() {
	return (
		<div className="flex flex-col gap-[1.8rem] max-w-[32rem] ">
			<Feature label="As fair as it gets">
				Unlike other platforms, sella.me prioritizes the security of all
				parties involved. We don&apos;t take sides; our focus is on
				providing a safe and fair environment for everyone
			</Feature>
			<Feature label="Escrow-Protected Transactions">
				Every transaction is safeguarded by established escrow
				procedures. The funds are only released to the seller when the
				buyer confirms receipt of the good or service
			</Feature>
			<Feature label="Efficient Dispute Resolution">
				We review chat history and engage with both parties to help find
				a resolution if a dispute arises. Our approach is based on
				fairness and transparency. Trust matters
			</Feature>
		</div>
	);
}

function Feature({ label, children }: PropsWithChildren<{ label: string }>) {
	return (
		<div className="flex gap-[0.75rem] items-center min-w-0">
			<Icons.Tick className="text-accent-100 size-[2.1rem] flex-shrink-0" />
			<p className=" text-black-60 flex flex-col">
				<span className="text-white font-semibold text-lg">
					{label}
				</span>{" "}
				<span>{children}</span>
			</p>
		</div>
	);
}
