'use client'

import { MutableRefObject, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { PreviewImage } from "~/shared/ui/image";

export function Carousel() {
	const ref =	useRef<HTMLDivElement>() as MutableRefObject<HTMLInputElement>;
	const { events } = useDraggable(ref);

	return (
		<div
			className="flex w-full px-[calc((100%-72.5rem)/2)] space-x-3 overflow-x-scroll scrollbar-hide"
			{...events}
			ref={ref}
		>

			{Array.from({ length: 10 }).map((_, index) => (
				<div key={index} className='flex-none w-[21.5rem] rounded-[1rem] border border-secondary bg-white/[.02] p-[0.5rem]' >
					<PreviewImage className='w-full' src={null} alt='item'/>
				</div>
			))}
		</div>
	);
}
