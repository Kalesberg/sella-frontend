import { HTMLArkProps, ark } from "@ark-ui/react";
import { ProductProp } from "./Prop";
import { createContext, useContext } from "react";
import { Product } from "~/shared/api/model";
import { cn } from "~/shared/lib/cn";
import { invariant } from "~/shared/lib/asserts";
import { Icons } from "~/shared/ui/icons";
import { PreviewImage, PreviewImageProps } from "~/shared/ui/image";

const context = createContext<Product | null>(null);

function useComponentContext() {
	const value = useContext(context);
	invariant(value, 'Usage useComponentContext outside context');

	return value;
}

export type RootProps = HTMLArkProps<'div'> & ProductProp;

export function Root({ product, className, ...props }: RootProps) {
	return (
		<context.Provider value={product}>
			<ark.div
				{...props}
				className={cn(
					'border border-secondary p-[0.5rem] pb-[1rem] rounded-[1.25rem] flex flex-col gap-[1rem] items-center w-[16.25rem]',
					className
				)}
			/>
		</context.Provider>
	);
}

export function Image({ className, ...props }: Omit<PreviewImageProps, 'src' | 'alt'>) {
	const { previewImage: imageUrl, name: title } = useComponentContext();

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
	const { name: title } = useComponentContext();

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
	const { description } = useComponentContext();

	return (
		<ark.p className={cn('text-black-60 leading-[1.3]', className)} {...props}>
			{description}
		</ark.p>
	);
}

export function Category({ className, ...props }: HTMLArkProps<'p'>) {
	const { category } = useComponentContext();

	return (
		<ark.p className={cn('text-black-40 font-semibold leading-[1.3]', className)} {...props}>
			{category}
		</ark.p>
	);
}

const currencyMap = new Map([
	['usdt', Icons.CurrencyUsdt]
])

export function Price({ className, ...props }: HTMLArkProps<'div'>) {
	const { price } = useComponentContext();
	const Icon = currencyMap.get('usdt');

	return (
		<ark.div className={cn('flex items-center gap-[0.375rem] text-accent-100', className)} {...props}>
			<span>{price.toFixed(2)}</span>
			{Icon && <Icon className='size-[1rem]' />}
		</ark.div>
	);
}