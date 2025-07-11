'use client'

import { RadioGroup as ArkRadioGroup } from '@ark-ui/react/radio-group'
import type { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/shared/lib/create-style-context'

const styles = tv(
	{
		base: 'radioGroup',
		defaultVariants: { size: 'default' },
		slots: {
			root: 'radioGroup__root',
			label: 'radioGroup__label',
			item: 'radioGroup__item select-none',
			itemText: [
				'text-white',
				'data-[disabled]:text-white/25'
			],
			itemControl: [
				'bg-white/[.08] rounded-full border outline outline-offset-[-0.25rem]',
				'bg-white/[.08] border-transparent outline-transparent transition-all',
				'data-[hover]:bg-white/[.16]',
				'data-[state=checked]:border-accent-100 data-[state=checked]:bg-accent-100 data-[state=checked]:outline-black/80',
				'data-[disabled]:bg-white/[.03]'
			],
			indicator: 'radioGroup__indicator',
		},
		variants: {
			size: {
				default: {
					root: 'radioGroup__root--size_md',
					label: 'radioGroup__label--size_md',
					item: 'radioGroup__item--size_md',
					itemText: 'radioGroup__itemText--size_md',
					itemControl: 'radioGroup__itemControl--size_md',
					indicator: 'radioGroup__indicator--size_md',
				},
			},
		},
	},
	{ twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(ArkRadioGroup.Root, 'root')
export const Indicator = withContext(ArkRadioGroup.Indicator, 'indicator')
export const Item = withContext(ArkRadioGroup.Item, 'item')
export const ItemControl = withContext(ArkRadioGroup.ItemControl, 'itemControl')
export const ItemText = withContext(ArkRadioGroup.ItemText, 'itemText')
export const Label = withContext(ArkRadioGroup.Label, 'label')

export type RootProps = ComponentProps<typeof Root>
export type IndicatorProps = ComponentProps<typeof Indicator>
export type ItemProps = ComponentProps<typeof Item>
export type ItemControlProps = ComponentProps<typeof ItemControl>
export type ItemTextProps = ComponentProps<typeof ItemText>
export type LabelProps = ComponentProps<typeof Label>