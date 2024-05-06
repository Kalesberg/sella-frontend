import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

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

type ButtonVariantProps = VariantProps<typeof styles>

const styles = tv(
	{
		base: 'button font-medium gap-[0.25rem]',
		defaultVariants: { variant: 'solid', size: 'default', colorPallete: 'accent' },
		variants: {
			variant: {
				solid: [],
				outline: [],
				subtle: []
			},
			size: {
				default: 'rounded-[0.75rem] px-[1rem] h-[2.375rem]'
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
	{ twMerge: false },
)
