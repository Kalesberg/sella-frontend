'use client';

import { useField } from "react-final-form";
import { cn } from "~/shared/lib/cn";
import { Uploader } from "../uploader";
import { HTMLAttributes } from "react";

interface ControlProps {
	name: string,
	label?: string,
	description?: string,
	rootProps?: HTMLAttributes<HTMLDivElement>
}

type VUploaderProps = Uploader.RootProps & ControlProps;

export function VUploader({ name, rootProps, description, label, ...props }: VUploaderProps) {
	const {
		input: { onChange },
		meta: fieldState
	} = useField(name)

	const error = fieldState.touched && fieldState.error;

	return (
		<Uploader.Root 
			name={name} {...props}
			onChange={files => {
				onChange(files);
				props?.onChange?.(files);
			}}
		>
			<div {...rootProps} className={cn('flex flex-col gap-[0.5rem]', rootProps?.className)}>
				{!!label && <label>{label}</label>}

				<Uploader.Previews>
					<Uploader.AddButton
						className={cn(!!error && 'border-error-100 text-error-100 shadow-error-default')}
					/>
				</Uploader.Previews>

				{!!description && (
					<span className='text-[#666666]'>{description}</span>
				)}
				{!!error && (
					<span className='text-error-100'>{error}</span>
				)}
			</div>
		</Uploader.Root>
	);
}