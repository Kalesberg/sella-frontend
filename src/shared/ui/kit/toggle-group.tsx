'use client'

import { ToggleGroup } from '@ark-ui/react/toggle-group'
import type { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/shared/lib/create-style-context'

const styles = tv(
	{
		base: 'toggleGroup',
		defaultVariants: { size: 'md', variant: 'solid' },
		slots: { root: 'toggleGroup__root', item: 'toggleGroup__item' },
		variants: {
			variant: {
				solid: {
					root: [
						'flex gap-2'
					],
					item: [
						'border border-transparent rounded-[1.25rem] bg-white/[.08] px-4 text-white',
						'hocus:bg-white/[.10] hocus:text-white',
						`data-[state=on]:bg-red-100/[.08]
            data-[state=on]:hocus:bg-red-100/[.16]
            data-[state=on]:hocus:text-red-100
            data-[state=on]:border
            data-[state=on]:border-red-100
            data-[state=on]:text-red-100`,
					]
				},
				outline: {
					root: 'toggleGroup__root--variant_outline',
					item: 'toggleGroup__item--variant_outline',
				},
				ghost: {
					root: 'toggleGroup__root--variant_ghost',
					item: 'toggleGroup__item--variant_ghost',
				},
			},
			size: {
				sm: { root: 'toggleGroup__root--size_sm', item: 'toggleGroup__item--size_sm' },
				md: { root: 'toggleGroup__root--size_md', item: 'toggleGroup__item--size_md' },
				lg: { root: 'toggleGroup__root--size_lg', item: 'toggleGroup__item--size_lg' },
			},
		},
	},
	{ twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(ToggleGroup.Root, 'root')
export const Item = withContext(ToggleGroup.Item, 'item')

export type RootProps = ComponentProps<typeof Root>
export type ItemProps = ComponentProps<typeof Item>
