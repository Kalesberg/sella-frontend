import { ComponentType, ReactNode } from "react";

interface InputAddonProps {
	children: (args: { Component: ComponentType, inputClassName: string }) => ReactNode
}

export function InputAddon({ children }: InputAddonProps) {
	return children({
		Component: Addon,
		inputClassName: 'ps-[5.3rem]'
	});
}

function Addon() {
	return (
		<span className='flex items-center absolute top-0 h-full ps-[1rem] text-black-60 cursor-default'>
			sella.me/
		</span>
	);
}