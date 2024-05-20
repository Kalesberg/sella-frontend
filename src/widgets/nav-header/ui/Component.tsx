"use client";
import { HTMLAttributes, useState } from "react";
import { cn } from "~/shared/lib/cn";
import { AppLogo } from "~/shared/ui/logo";
import { NavItems } from "./NavItems";
import { Button } from "~/shared/ui/kit/button";
import Link from "next/link";
import { PhoneNavItems } from "./PhoneNavItems";

export function Component({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	const [showPhoneNavbar, setShowPhoneNavbar] = useState(false);

	const togglePhoneNavbar = () => {
		setShowPhoneNavbar((prev) => !prev);
	};

	return (
		<>
			<div
				{...props}
				className={cn(
					"flex items-center justify-between gap-[1rem] p-[1rem] rounded-[1.25rem] h-[4.38rem]",
					"border border-secondary",
					"backdrop-blur-[3rem]",
					className
				)}
			>
				<div className="flex items-center gap-[2rem] justify-between md:justify-start w-full">
					<Link href="/">
						<AppLogo />
					</Link>
					<Button
						className="md:hidden"
						variant="subtle"
						onClick={togglePhoneNavbar}
					>
						<HamBurgerMenu active={showPhoneNavbar} />
					</Button>
					<NavItems />
				</div>

				<div className="hidden items-center gap-[1rem] md:flex">
					<Button variant="outline">Buy $SELLA</Button>
					<Button variant="solid">Open Storefront</Button>
				</div>
			</div>
			{showPhoneNavbar && (
				<PhoneNavbarContent setShowPhoneNavbar={setShowPhoneNavbar} />
			)}
		</>
	);
}

interface HamBurgerMenuProps {
	active: boolean;
}

function HamBurgerMenu({ active }: HamBurgerMenuProps) {
	const commonProps = {
		width: "38",
		height: "38",
		viewBox: "0 0 38 38",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
	};

	const lines = active ? (
		<path
			d="M25 13L13 25M13 13L25 25"
			stroke="white"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	) : (
		<path
			d="M10 19H28M10 13H28M10 25H22"
			stroke="white"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	);

	return (
		<svg {...commonProps}>
			<rect
				x="0.5"
				y="0.5"
				width="37"
				height="37"
				rx="11.5"
				stroke="white"
				strokeOpacity="0.08"
			/>
			{lines}
		</svg>
	);
}

interface PhoneNavbarContentProps {
	setShowPhoneNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

function PhoneNavbarContent({ setShowPhoneNavbar }: PhoneNavbarContentProps) {
	return (
		<div className="backdrop-blur-[3rem] flex flex-col p-4 justify-between h-screen pt-36 fixed top-0 z-[10] w-full">
			<PhoneNavItems
				setShowPhoneNavbar={setShowPhoneNavbar}
				className="text-[2rem] gap-5 pl-4 font-semibold"
			/>

			<div className="w-full flex flex-col gap-4 mb-5">
				<Button variant="outline">Buy $SELLA</Button>
				<Button variant="solid">Open Storefront</Button>
			</div>
		</div>
	);
}
