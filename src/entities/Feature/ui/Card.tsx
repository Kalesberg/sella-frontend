import { HTMLArkProps, ark } from "@ark-ui/react";

import { createContext, useContext } from "react";
import { cn } from "~/shared/lib/cn";
import { invariant } from "~/shared/lib/asserts";
import { PreviewImage, PreviewImageProps } from "~/shared/ui/image";
import { Feature } from "~/shared/api/model";
import { FeatureProp } from "./Prop";

const context = createContext<Feature | null>(null);

function useComponentContext() {
	const value = useContext(context);
	invariant(value, "Usage useComponentContext outside context");

	return value;
}

export type RootProps = HTMLArkProps<"div"> & FeatureProp;

export function Root({ feature, className, ...props }: RootProps) {
	return (
		<context.Provider value={feature}>
			<ark.div
				{...props}
				className={cn(
					"border border-secondary p-[0.5rem] pb-[1rem] rounded-[1.25rem] flex flex-col gap-[1rem] items-center",
					className
				)}
			/>
		</context.Provider>
	);
}

export function Image({
	className,
	...props
}: Omit<PreviewImageProps, "src" | "alt">) {
	const { imageUrl, title } = useComponentContext();

	return (
		<PreviewImage
			alt={`Image of ${title}`}
			src={imageUrl}
			{...props}
			className={cn("flex-shrink-0 w-full shadow-sm", className)}
		/>
	);
}

export function Content({ className, ...props }: HTMLArkProps<"div">) {
	return (
		<ark.div
			className={cn("flex flex-col gap-[1rem] px-[0.75rem]", className)}
			{...props}
		/>
	);
}

export function Title({ className, ...props }: HTMLArkProps<"h1">) {
	const { title } = useComponentContext();

	return (
		<ark.h1 
			{...props}
			className={cn("flex items-center gap-[0.5rem] font-semibold text-[1.125rem] font-manrope leading-[1.3]", className)}
		>
			{title}
		</ark.h1>
	);
}

export function Description({ className, ...props }: HTMLArkProps<"p">) {
	const { description } = useComponentContext();

	return (
		<ark.p
			className={cn("text-black-60 leading-[1.3]", className)}
			{...props}
		>
			{description}
		</ark.p>
	);
}