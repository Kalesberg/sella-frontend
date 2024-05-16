'use client';

import { HTMLArkProps, ark } from "@ark-ui/react";
import { StoreProp } from "./Prop";
import { createContext, useContext } from "react";
import { Store } from "~/shared/api/model";
import { cn } from "~/shared/lib/cn";
import { invariant } from "~/shared/lib/asserts";
import { Icons } from "~/shared/ui/icons";
import { PreviewImage, PreviewImageProps } from "~/shared/ui/image";

const context = createContext<Store | null>(null);

function useComponentContext() {
	const value = useContext(context);
	invariant(value, "Usage useComponentContext outside context");

	return value;
}

export type RootProps = HTMLArkProps<'div'> & StoreProp;

export function Root({ store, className, ...props }: RootProps) {
	return (
		<context.Provider value={store}>
			<ark.div
				{...props}
				className={cn(
					'border border-secondary p-[1rem] rounded-[1.25rem] flex gap-[1rem] items-center max-w-[35rem]',
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
			className={cn('rounded-full flex-shrink-0 shadow-sm', className)}
		/>
	);
}

export function Content({ className, ...props }: HTMLArkProps<'div'>) {
	return (
		<ark.div className={cn('flex flex-col gap-[1rem]', className)} {...props} />
	)
}

export function Title({ className, ...props }: HTMLArkProps<'div'>) {
	const { name: title, shortName: name, isVerified } = useComponentContext();

	return (
		<ark.div className={cn('flex flex-col gap-[0.25rem]', className)} {...props}>
			<div className='flex items-center gap-[0.5rem] font-semibold text-[1.5rem] font-manrope leading-[1.3]'>
				<h1>{title}</h1>
				{isVerified && <Icons.Verified className='text-accent-100 size-[1em]' />}
			</div>

			<span className='font-semibold text-black-40'>
				{name}
			</span>
		</ark.div>
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

export function Rating({ className, ...props }: HTMLArkProps<"div">) {
	const { rating } = useComponentContext();

	return (
		<ark.div
			className={cn("flex items-center gap-[0.5rem]", className)}
			{...props}
		>
			<span className="text-black-60 font-semibold">
				{rating.reviewsCount} Reviews
			</span>

			<div className="flex items-center gap-[0.5rem]">
				<div className="flex gap-[0.2rem] text-green-100 items-center font-semibold">
					<Icons.Likes className="size-[1rem]" />{" "}
					<span>{rating.likes}</span>
				</div>

				<div className="flex items-center gap-[0.4rem] text-red-100 font-semibold">
					<Icons.Dislikes className="size-[1rem]" />{" "}
					<span>{rating.dislikes}</span>
				</div>
			</div>
		</ark.div>
	);
}
