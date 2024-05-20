'use client';

import { 
	Dispatch, 
	PropsWithChildren, 
	SetStateAction, 
	createContext, 
	useContext, 
	useMemo, 
	useState 
} from "react";
import { invariant } from "~/shared/lib/asserts";

interface Context {
	enabled: boolean,
	setEnabled: Dispatch<SetStateAction<boolean>>
}

const context = createContext<Context | null>(null);

export function useEditModeContext() {
	const value = useContext(context);
	invariant(!!value, 'Usage of useEditModeContext outside context');
	return value;
}

export function EditModeProvider({ children }: PropsWithChildren) {
	const [enabled, setEnabled] = useState(false);
	const contextValue = useMemo(() => ({ enabled, setEnabled }), [enabled]);

	return (
		<context.Provider value={contextValue}>
			{children}
		</context.Provider>
	);
}