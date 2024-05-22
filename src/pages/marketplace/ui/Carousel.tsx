'use client'

import { HTMLAttributes, MutableRefObject, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { PreviewImage } from "~/shared/ui/image";
import { cn } from "~/shared/lib/cn";

export function Carousel({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
	const ref =	useRef<HTMLDivElement>() as MutableRefObject<HTMLInputElement>;
	const { events } = useDraggable(ref);

	return (
		<div
			className={cn(
				"flex w-full space-x-3 overflow-x-scroll scrollbar-hide",
				className
			)}
			{...props}
			{...events}
			ref={ref}
			style={{
				padding: '0 max(calc((100% - 72.5rem + 2rem) / 2), 1rem)'
			}}
		>

			{Array.from({ length: 10 }).map((_, index) => (
				<div key={index} className='flex-none w-[21.5rem] rounded-[1rem] border border-secondary bg-white/[.02] p-[0.5rem]' >
					<PreviewImage className='w-full' src={null} alt='item'/>
				</div>
			))}
		</div>
	);
}
