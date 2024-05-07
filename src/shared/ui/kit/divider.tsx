import { HTMLAttributes, forwardRef } from "react";
import { cn } from "~/shared/lib/cn";

export const Divider = forwardRef<HTMLHRElement, HTMLAttributes<HTMLHRElement>>(
	({ className, ...props }, ref) => (
		<hr ref={ref} className={cn('border-white/10', className)} {...props} />
	)
);

Divider.displayName = 'Divider';

export const DividerWithText = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, children, ...props }, ref) => (
		<div ref={ref} className={cn('flex items-center gap-[0.375rem]', className)} {...props}>
			<Divider className='flex-grow' />
			{children}
			<Divider className='flex-grow' />
		</div>
	)
)

DividerWithText.displayName = 'DividerWithText';