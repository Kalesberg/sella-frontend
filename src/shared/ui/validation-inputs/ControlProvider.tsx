import { useContext, createContext, PropsWithChildren, useId, useMemo } from "react";
import { invariant } from "~/shared/lib/asserts";

export interface ControlProps {
	name: string
	id?: string
}

const context = createContext<Required<ControlProps> | null>(null);

export function useControlContext() {
	const value = useContext(context);
	invariant(value, 'Usage of useControlContext outside context');
	return value;
}

export function ControlProvider({ name, id, children }: PropsWithChildren<ControlProps>) {
	const generatedId = useId();
	const inputId = id ?? generatedId;
	const contextValue = useMemo(() => ({ id: inputId, name }), [inputId, name]);

	return (
		<context.Provider value={contextValue}>
			{children}
		</context.Provider>
	);
}