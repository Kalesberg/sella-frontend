import { ark, HTMLArkProps } from "@ark-ui/react";
import { cn } from "~/shared/lib/cn";

export function Heading({ className, ...props }: HTMLArkProps<'h1'>) {
	return (
		<ark.h1
			{...props}
			className={cn('text-[3.375rem] text-white font-semibold font-manrope leading-[1.1]', className)}
		/>
	);
}