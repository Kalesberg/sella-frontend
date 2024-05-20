"use client";
import { HTMLAttributes, useState } from "react";
import { cn } from "~/shared/lib/cn";
import { AppLogo } from "~/shared/ui/logo";
import { NavItems } from "./NavItems";
import { Button, IconButton } from "~/shared/ui/kit/button";
import Link from "next/link";
import { PhoneNavItems } from "./PhoneNavItems";
import { Icons } from "~/shared/ui/icons";

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
					"border border-secondary", showPhoneNavbar && "border-transparent",
					"backdrop-blur-[3rem]",
					className
				)}
			>
				<div className="flex items-center gap-[2rem] justify-between md:justify-start w-full">
					<Link href="/">
						<AppLogo />
					</Link>
					<IconButton
						colorPallete='gray'
						variant="outline" size='sm'
						className="md:hidden [&_svg]:size-[1.5rem]"
						onClick={togglePhoneNavbar}
					>
						{/* <HamBurgerMenu active={showPhoneNavbar} /> */}
						{showPhoneNavbar ? (
							<Icons.Close />
						) : (
							<Icons.Menu />
						)}
					</IconButton>
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

interface PhoneNavbarContentProps {
	setShowPhoneNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

function PhoneNavbarContent({ setShowPhoneNavbar }: PhoneNavbarContentProps) {
	return (
		<div className="backdrop-blur-[3rem] bg-black-06/50 flex flex-col p-4 justify-between h-screen pt-36 fixed top-0 z-[10] w-full">
			<PhoneNavItems
				setShowPhoneNavbar={setShowPhoneNavbar}
				className="text-[2.5rem] gap-[2.25rem] pl-[1.25rem] font-semibold leading-[1]"
			/>

			<div className="w-full flex flex-col gap-4 mb-5">
				<Button variant="outline">Buy $SELLA</Button>
				<Button variant="solid">Open Storefront</Button>
			</div>
		</div>
	);
}
