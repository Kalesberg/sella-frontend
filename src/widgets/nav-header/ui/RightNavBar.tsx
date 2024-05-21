'use client';

import Link from "next/link";
import { ComponentProps, HTMLAttributes, useState } from "react";
import { cn } from "~/shared/lib/cn";
import { truncateStrFromMiddle } from "~/shared/lib/truncate";
import { Icons } from "~/shared/ui/icons";
import { Button, IconButton } from "~/shared/ui/kit/button";
import { usePathnameMatcher } from "~/shared/ui/nav-link";

export function UserNavBar({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
	const [loggedIn, setLoggedIn] = useState(false);

	return loggedIn ? (
		<div {...props}
			className={cn(
				'flex gap-[0.75rem]',
				'max-lg:flex-col max-lg:border-t max-lg:border-t-secondary max-lg:pt-[1.5rem] max-lg:px-[1.25rem]',
				className
			)}
		>
			<div className='flex flex-col items-end justify-between text-[0.8125rem] max-lg:flex-row max-lg:text-[1.125rem]'>
				<span>@username</span>
				<span className='text-black-40'>
					{truncateStrFromMiddle('3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy')}
				</span>
			</div>

			<div className='flex gap-[0.75rem] max-lg:[&>*]:w-full max-lg:[&>*]:h-[3.4375rem]'>
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
					colorPalette='gray' size='sm'
				>
					<Icons.Settings />
				</IconButton>
			</div>
		</div>
	) : (
		<div {...props} className={cn('flex items-center gap-[1rem]', className)}>
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
				className='text-accent-100 h-full'
				colorPalette='gray' size='sm'
				{...props}
				active={active}
			/>
		</Link>
	)
}