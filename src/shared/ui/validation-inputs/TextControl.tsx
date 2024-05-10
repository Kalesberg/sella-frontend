'use client';

import { Input, InputProps, TextArea, TextAreaProps } from "../kit/input";
import { HTMLAttributes, ReactNode, useId } from "react";
import { useField } from "react-final-form";
import { cn } from "~/shared/lib/cn";
import { ValidationStatusIcon } from "./ValidationStatusIcon";

interface ControlProps {
	name: string,
	label?: string,
	description?: string,
	rootProps?: HTMLAttributes<HTMLDivElement>
	addonElement?: ReactNode
}

type TextControlProps = Omit<InputProps, 'error'> & ControlProps;

export function TextControl({ name, label, description, id, rootProps, addonElement, ...props }: TextControlProps) {
	const {
		meta: fieldState,
		input: { onChange, ...fieldProps }
	} = useField(name);

	const generatedId = useId();
	const inputId = id ?? generatedId;
	const error = fieldState.touched && fieldState.error;

	return (
		<div {...rootProps} className={cn('flex flex-col gap-[0.5rem]', rootProps?.className)}>
			{!!label && <label htmlFor={inputId}>{label}</label>}
			<div className='relative'>
				{addonElement}
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
				<ValidationStatusIcon name={name} className='absolute h-full right-2 top-0' />
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

type TextAreaControlProps = Omit<TextAreaProps, 'error'> & ControlProps;

export function TextAreaControl({ name, label, description, id, rootProps, addonElement, ...props }: TextAreaControlProps) {
	const {
		meta: fieldState,
		input: { onChange, ...fieldProps }
	} = useField(name);

	const generatedId = useId();
	const inputId = id ?? generatedId;
	const error = fieldState.touched && fieldState.error;

	return (
		<div {...rootProps} className={cn('flex flex-col gap-[0.5rem]', rootProps?.className)}>
			{!!label && <label htmlFor={inputId}>{label}</label>}
			<div className='relative'>
				{addonElement}
				<TextArea
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
				<ValidationStatusIcon
					name={name}
					className='absolute h-full right-2 top-0 items-start py-[1rem]'
				/>
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