import { useField } from "react-final-form";
import { ToggleGroup } from '~/shared/ui/kit';
import { VTextControl } from '~/shared/ui/validation-inputs';
import {ToggleGroupField} from "~/features/report-shop/ui/ToggleGroupField";

type ToggleGroupFieldProps = ToggleGroup.RootProps & {
  name: string
  options: {
    id: string
    label: string
  }[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function VToggleGroup({options, name, onValueChange, class: c, ...props}: ToggleGroupFieldProps) {
	const {input: {value, onChange}} = useField(name);

	return (
		<>
			<VTextControl.Root name='reason'>
				<ToggleGroupField
					options={options}
					value={value}
					onValueChange={(v) => {
						onValueChange?.(v)
						onChange(v.value)
					}}
					multiple
					{...props}
				/>

				<VTextControl.ErrorText className='text-center' />
			</VTextControl.Root>
		</>
	)
}
