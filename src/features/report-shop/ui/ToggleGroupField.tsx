import {ToggleGroup} from '~/shared/ui/kit';
import {cn} from "~/shared/lib/cn";

type ToggleGroupFieldProps = ToggleGroup.RootProps & {
  options: {
    id: string
    label: string
  }[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ToggleGroupField({options, onValueChange, className, class: c, ...props}: ToggleGroupFieldProps) {

	return (
		<ToggleGroup.Root
			className={cn('flex flex-wrap justify-center px-[1.906rem]', className)}
			multiple
			{...props}
		>
			{options.map(({id, label}) => (
				<ToggleGroup.Item key={id} value={id} aria-label={label}>
					{label}
				</ToggleGroup.Item>
			))}
		</ToggleGroup.Root>
	)
}
