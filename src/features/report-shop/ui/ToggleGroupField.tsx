import {useField} from "react-final-form";
import {ToggleGroup} from '~/shared/ui/kit';
import {VTextControl} from '~/shared/ui/validation-inputs';
import {cn} from "~/shared/lib/cn";

type ToggleGroupFieldProps = ToggleGroup.RootProps & {
  name: string
  options: {
    id: string
    label: string
  }[]
}


export function ToggleGroupField({options, name, onValueChange, className, ...props}: ToggleGroupFieldProps) {
	const {input: {value, onChange}} = useField(name);

	return (
		<>
			<VTextControl.Root name='reason'>
				{/*@ts-expect-error Types of property className are incompatible*/}
				<ToggleGroup.Root
					className={cn('flex flex-wrap justify-center px-[1.906rem]', className)}
					value={value}
					onValueChange={(v) => {
						onValueChange?.(v)
						onChange(v.value)
					}}
					multiple
					{...props}
				>
					{options.map(({id, label}) => (
						<ToggleGroup.Item key={id} value={id} aria-label={label}>
							{label}
						</ToggleGroup.Item>
					))}
				</ToggleGroup.Root>

				<VTextControl.LabelOrError className='text-center' />
			</VTextControl.Root>
		</>

	)
}
