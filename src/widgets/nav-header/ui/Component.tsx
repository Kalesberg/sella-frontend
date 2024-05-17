import { HTMLAttributes } from "react";
import { cn } from "~/shared/lib/cn"
import { AppLogo } from "~/shared/ui/logo";
import { NavItems } from "./NavItems";
import { Button } from "~/shared/ui/kit/button";
import Link from "next/link";

export function Component({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={cn(
				'flex items-center justify-between gap-[1rem] p-[1rem] rounded-[1.25rem] h-[4.38rem]',
				'border border-secondary',
				'backdrop-blur-[3rem]',
				className
			)}
		>
			<div className='flex items-center gap-[2rem]'>
				<Link href='/'>
					<AppLogo />
				</Link>

				<NavItems />
			</div>

			<div className='hidden items-center gap-[1rem] md:flex'>
				<Button variant='outline'>
					Buy $SELLA
				</Button>
				
				<Button variant='solid'>
					Open Storefront
				</Button>
			</div>
		</div>
	);
}