import { HTMLAttributes, Dispatch, SetStateAction } from "react";
import { cn } from "~/shared/lib/cn";
import { Link } from "~/shared/ui/nav-link";

interface PhoneNavItemsProps extends HTMLAttributes<HTMLDivElement> {
	setShowPhoneNavbar: Dispatch<SetStateAction<boolean>>;
}

export function PhoneNavItems({
	className,
	setShowPhoneNavbar,
	...props
}: PhoneNavItemsProps) {
	const handleLinkClick = () => {
		setShowPhoneNavbar(false);
	};

	return (
		<div
			{...props}
			className={cn(
				"items-start gap-[2rem] flex flex-col md:flex",
				className
			)}
		>
			<NavItem onClick={handleLinkClick} href="#explore">
				Home
			</NavItem>
			<NavItem onClick={handleLinkClick} href="#explore">
				Explore
			</NavItem>
			<NavItem onClick={handleLinkClick} href="#features">
				Features
			</NavItem>
			<NavItem onClick={handleLinkClick} href="#whitepaper">
				Whitepaper
			</NavItem>
			<NavItem onClick={handleLinkClick} href="#roadmap">
				Roadmap
			</NavItem>
		</div>
	);
}

interface NavItemProps {
	href: string;
	onClick: () => void;
	children: React.ReactNode;
}

function NavItem({ href, onClick, children }: NavItemProps) {
	return (
		<Link onClick={onClick} href={href}>
			{children}
		</Link>
	);
}
