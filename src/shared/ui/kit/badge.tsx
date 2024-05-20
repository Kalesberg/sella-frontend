import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export interface BadgeProps extends BadgeVariantProps, HTMLArkProps<'div'> {}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
	const { size, variant, className, colorPallete, ...rest } = props
	return <ark.div className={styles({ size, variant, className, colorPallete })} ref={ref} {...rest} />
})

Badge.displayName = 'Badge'

type BadgeVariantProps = VariantProps<typeof styles>

const styles = tv(
	{
		base: 'badge',
		defaultVariants: { 
			variant: 'subtle', 
			size: 'md',
			colorPallete: 'gray'
		},
		variants: {
			variant: {
				subtle: [],
			},
			size: { 
				md: 'text-[0.875rem]/[1.4] px-[0.75rem] py-[0.25rem] rounded-[1rem]', 
			},
			colorPallete: {
				accent: [],
				gray: []
			},
		},
		compoundVariants: [
			{
				variant: 'subtle',
				colorPallete: 'accent',
				className: 'bg-accent-100/[.16] text-accent-100'
			},
			{
				variant: 'subtle',
				colorPallete: 'gray',
				className: 'bg-white/[.08] text-black-60'
			},
		]
	},
	{ twMerge: false },
)
