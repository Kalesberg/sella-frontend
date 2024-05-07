import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '~/shared/lib/cn'

export interface ButtonProps extends ButtonVariantProps, HTMLArkProps<'button'> {
	active?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { size, variant, className, colorPallete, active = false, ...buttonProps } = props

	return (
		<ark.button
			className={styles({ size, variant, className, colorPallete })}
			data-active={active ? true : undefined}
			ref={ref} {...buttonProps}
		/>
	);
})

Button.displayName = 'Button'

export const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => (
	<Button ref={ref} {...props} className={cn(className, 'px-0')} />
));

IconButton.displayName = 'IconButton';

type ButtonVariantProps = VariantProps<typeof styles>

const styles = tv(
	{
		base: 'button font-medium gap-[0.25rem]',
		defaultVariants: { variant: 'solid', size: 'md', colorPallete: 'accent' },
		variants: {
			variant: {
				solid: [],
				outline: [],
				subtle: [],
				ghost: ['hocus:bg-white/5']
			},
			size: {
				sm: 'rounded-[0.75rem] px-[1rem] h-[2.375rem] min-w-[2.375rem]',
				md: 'rounded-[0.75rem] px-[1rem] h-[2.8125rem] min-w-[2.8125rem]',
				lg: 'rounded-[1rem] px-[1.25rem] h-[3.125rem] min-w-[3.125rem]',
				xl: 'rounded-[1rem] px-[1.5rem] h-[3.4375rem] min-w-[3.4375rem]'
			},
			colorPallete: {
				accent: [],
				gray: [],
				red: [],
				green: []
			}
		},
		compoundVariants: [
			{
				colorPallete: 'accent',
				variant: 'solid',
				className: [
					'bg-accent-100 text-black-100',
					'hocus:bg-accent-100/80'
				]
			},
			{
				colorPallete: 'gray',
				variant: 'solid',
				className: [
					'bg-white/[.04] text-white',
					'hocus:bg-white/[.06]'
				]
			},
			{
				colorPallete: 'accent',
				variant: 'outline',
				className: [
					'border border-accent-100 text-accent-100',
					'hocus:bg-accent-100 hocus:text-black-100'
				]
			},
			{
				colorPallete: 'red',
				variant: 'subtle',
				className: [
					'bg-red-100/[.08] text-red-100',
					'hocus:bg-red-100/[.16]',
					'data-[active]:bg-red-100 data-[active]:hocus:bg-red-100/80 data-[active]:text-white'
				]
			},
			{
				colorPallete: 'green',
				variant: 'subtle',
				className: [
					'bg-green-100/[.08] text-green-100',
					'hocus:bg-green-100/[.16]',
					'data-[active]:bg-green-100 data-[active]:hocus:bg-green-100/80 data-[active]:text-white'
				]
			},
		]
	},
	{ twMerge: true },
)
