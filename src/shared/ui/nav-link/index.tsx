'use client';

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "~/shared/lib/cn";

interface LinkProps extends ComponentPropsWithoutRef<typeof NextLink> {
	active?: boolean
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ active, className, ...props }, ref) => (
	<NextLink
		ref={ref} {...props}
		className={cn(
			'transition-all',
			active ? 'text-accent-100' : 'hover:text-accent-100',
			className
		)}
	/>
));

Link.displayName = 'Link';

interface NavLinkProps extends LinkProps {
	end?: boolean
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(({ end = false, ...props }, ref) => {
	const pathname = usePathname();
	const href = props.href.toString();
	const isActive = end ? pathname == href : pathname?.startsWith(href);

	return (
		<NavLink active={isActive} ref={ref} {...props}/>
	);
});

NavLink.displayName = 'NavLink';