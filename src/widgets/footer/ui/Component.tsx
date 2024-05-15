import { HTMLAttributes } from "react";
import { cn } from "~/shared/lib/cn";
import { AppLogo } from "~/shared/ui/logo";
import Link from "next/link";
import { FooterItems } from "./FooterItems";

export function Component({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={cn(
				"flex items-center justify-center gap-[1rem] p-[2.5rem] m-3 rounded-[1.25rem]",
				"border border-secondary",
				"backdrop-blur-[3rem]",
				className
			)}
		>
			<div className="flex flex-col items-center gap-[2rem]">
				<Link href="/">
					<AppLogo />
				</Link>

				<FooterItems />
			</div>
		</div>
	);
}
