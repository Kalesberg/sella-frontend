'use client';

import { createContext, useContext } from "react";
import { Store } from "~/shared/api/model";
import { invariant } from "~/shared/lib/asserts";

const context = createContext<Store | null>(null);

export function useStoreContext() {
	return useContext(context)
}

export function useStoreStrictContext() {
	const value = useStoreContext();
	invariant(value, "Usage useComponentContext outside context");

	return value;
}

export const StoreProvider = context.Provider;