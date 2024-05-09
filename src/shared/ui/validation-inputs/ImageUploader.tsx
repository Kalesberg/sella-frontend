'use client';

import { useField } from "react-final-form";
import { ImageUploader, ImageUploaderProps } from "../image-uploader";
import { cn } from "~/shared/lib/cn";

interface VImageUploaderProps extends ImageUploaderProps {
	name: string
}

export function VImageUploader({ name, className, ...props }: VImageUploaderProps) {
	const { 
		input: { onChange },
		meta: { error }
	} = useField(name)

	return (
		<ImageUploader
			{...props}
			className={cn(!!error && 'border-error-100 text-error-100 shadow-error-default', className)}
			onChange={image => {
				onChange(image);
				props?.onChange?.(image);
			}}
		/>
	);
}