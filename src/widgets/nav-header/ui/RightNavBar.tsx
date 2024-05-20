'use client';

import Link from "next/link";
import { ComponentProps, useState } from "react";
import { truncateStrFromMiddle } from "~/shared/lib/truncate";
import { Icons } from "~/shared/ui/icons";
import { Button, IconButton } from "~/shared/ui/kit/button";
import { usePathnameMatcher } from "~/shared/ui/nav-link";

export function UserNavBar() {
	const [loggedIn, setLoggedIn] = useState(false);

	return loggedIn ? (
		<div className='flex gap-[0.75rem]'>
			<div className='flex flex-col items-end justify-between text-[0.8125rem]'>
				<span>@username</span>
				<span className='text-black-40'>
					{truncateStrFromMiddle('3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy')}
				</span>
			</div>

			<NavIconButton 
				href='/dashboard/sales' 
				activeOnHrefs={['/dashboard/orders']}
			>
				<Icons.Package />
			</NavIconButton>

			<NavIconButton href='/dashboard' end>
				<Icons.Building />
			</NavIconButton>

			<IconButton
				className='text-accent-100'
				colorPallete='gray' size='sm'
			>
				<Icons.Settings />
			</IconButton>
		</div>
	) : (
		<div className='flex items-center gap-[1rem]'>
			<Button variant='outline'>
				Buy $SELLA
			</Button>

			<Button
				onClick={() => setLoggedIn(true)}
			>
				Open Storefront
			</Button>
		</div>
	);
}

interface NavIconButtonProps extends ComponentProps<typeof IconButton> {
	href: string, 
	end?: boolean,
	activeOnHrefs?: string[]
}

function NavIconButton({ href, end, activeOnHrefs, ...props }: NavIconButtonProps) {
	const isMatch = usePathnameMatcher();
	const active = isMatch({ href, end }) || !!activeOnHrefs?.some(isMatch);

	return (
		<Link href={href}>
			<IconButton
				className='text-accent-100'
				colorPallete='gray' size='sm'
				{...props}
				active={active}
			/>
		</Link>
	)
}