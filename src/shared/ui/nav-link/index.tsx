'use client';

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, forwardRef, useCallback } from "react";
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

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(({ href, end = false, ...props }, ref) => {
	const isMatch = usePathnameMatcher();

	return (
		<Link
			href={href}
			active={isMatch({ href, end })}
			ref={ref} {...props}
		/>
	);
});

NavLink.displayName = 'NavLink';

interface UsePathnameMatcherArgs {
	href: LinkProps['href'],
	end?: boolean
}

export function usePathnameMatcher() {
	const pathname = usePathname();

	return useCallback((args: UsePathnameMatcherArgs | string) => {
		const { href: url, end = false } = (typeof args == 'string' ? { href: args } : args);
		const href = url.toString();
		
		return end ? pathname == href : pathname?.startsWith(href);
	}, [pathname]);
}