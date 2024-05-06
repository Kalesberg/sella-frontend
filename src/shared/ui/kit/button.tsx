import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export interface ButtonProps extends ButtonVariantProps, HTMLArkProps<'button'> { }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { size, variant, className, colorPallete, ...buttonProps } = props

	return (
		<ark.button 
			className={styles({ size, variant, className, colorPallete })} 
			ref={ref} {...buttonProps} 
		/>
	);
})

Button.displayName = 'Button'

type ButtonVariantProps = VariantProps<typeof styles>

const styles = tv(
	{
		base: 'button font-medium',
		defaultVariants: { variant: 'solid', size: 'default', colorPallete: 'accent' },
		variants: {
			variant: {
				solid: [],
				outline: []
			},
			size: {
				default: 'rounded-[0.75rem] px-[1rem] h-[2.375rem]'
			},
			colorPallete: {
				accent: [],
				gray: []
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
		]
	},
	{ twMerge: false },
)
