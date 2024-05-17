'use client';

import { HTMLArkProps, ark } from "@ark-ui/react";
import { ProductProp } from "./Prop";
import { cn } from "~/shared/lib/cn";
import { PreviewImage, PreviewImageProps } from "~/shared/ui/image";
import { ProductProvider, useProductStrictContext } from "./context";

export type RootProps = HTMLArkProps<'div'> & ProductProp;

export function Root({ product, className, ...props }: RootProps) {
	return (
		<ProductProvider value={product}>
			<ark.div
				{...props}
				className={cn(
					'border border-secondary p-[0.5rem] pb-[1rem] rounded-[1.25rem] flex flex-col gap-[1rem] items-center w-[16.25rem]',
					className
				)}
			/>
		</ProductProvider>
	);
}

export function Image({ className, ...props }: Omit<PreviewImageProps, 'src' | 'alt'>) {
	const { previewImage: imageUrl, name: title } = useProductStrictContext();

	return (
		<PreviewImage
			alt={`Image of ${title}`}
			src={imageUrl} {...props}
			className={cn('flex-shrink-0 w-full shadow-sm', className)}
		/>
	);
}

export function Content({ className, ...props }: HTMLArkProps<'div'>) {
	return (
		<ark.div className={cn('flex flex-col gap-[1rem] px-[0.75rem]', className)} {...props} />
	)
}

export function Title({ className, ...props }: HTMLArkProps<'h1'>) {
	const { name: title } = useProductStrictContext();

	return (
		<ark.h1
			{...props}
			className={cn('flex items-center gap-[0.5rem] font-semibold text-[1.125rem] font-manrope leading-[1.3]', className)}
		>
			{title}
		</ark.h1>
	);
}

export function Description({ className, ...props }: HTMLArkProps<'p'>) {
	const { description } = useProductStrictContext();

	return (
		<ark.p className={cn('text-black-60 leading-[1.3]', className)} {...props}>
			{description}
		</ark.p>
	);
}

export function Category({ className, ...props }: HTMLArkProps<'p'>) {
	const { category } = useProductStrictContext();

	return (
		<ark.p className={cn('text-black-40 font-semibold leading-[1.3]', className)} {...props}>
			{category}
		</ark.p>
	);
}

export { Price } from './Price';