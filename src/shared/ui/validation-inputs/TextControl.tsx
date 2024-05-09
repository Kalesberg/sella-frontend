'use client';

import { Input, InputProps } from "../kit/input";
import { HTMLAttributes, useId } from "react";
import { useField } from "react-final-form";
import { cn } from "~/shared/lib/cn";
import { Icons } from "../icons";

interface TextControlProps extends Omit<InputProps, 'error'> {
	name: string,
	label?: string,
	description?: string,
	rootProps?: HTMLAttributes<HTMLDivElement>
}

export function TextControl({ name, label, description, id, rootProps, ...props }: TextControlProps) {
	const {
		meta: fieldState,
		input: { onChange, ...fieldProps }
	} = useField(name);

	const generatedId = useId();
	const inputId = id ?? generatedId;

	const error = fieldState.touched && fieldState.error;
	const isValidated = !!(fieldState.modified && fieldState.valid) && fieldProps.value.length > 0;

	return (
		<div {...rootProps} className={cn('flex flex-col gap-[0.5rem]', rootProps?.className)}>
			{!!label && <label htmlFor={inputId}>{label}</label>}
			<div className='relative'>
				<Input
					{...props}
					{...fieldProps}
					onChange={e => {
						onChange(e);
						props?.onChange?.(e);
					}}
					id={inputId}
					error={!!error}
					className={cn('w-full pe-[3rem]', props?.className)}
				/>
				<div className='absolute h-full right-0 top-0 px-[1rem] flex justify-center items-center'>
					<Icons.CircleChecked
						className={cn('text-green-100 opacity-0 transition-all', isValidated && 'opacity-100')}
					/>
					<Icons.CircleError
						className={cn('text-error-100 opacity-0 absolute transition-all', !!error && 'opacity-100')}
					/>
				</div>
			</div>
			{!!description && (
				<span className='text-[#666666]'>{description}</span>
			)}
			{!!error && (
				<span className='text-error-100'>{error}</span>
			)}
		</div>
	);
}