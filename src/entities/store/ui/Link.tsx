'use client';

import NextLink from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { StoreProp } from "./Prop";
import { useProductContext } from "~/entities/product/ui/context";
import { invariant } from "~/shared/lib/asserts";

type LinkProps = Omit<ComponentPropsWithoutRef<typeof NextLink>, 'href'> & Partial<StoreProp>;

export function Link({ store: s, ...props }: LinkProps) {
	const store = useProductContext() ?? s;
	invariant(!!store, 'Usage of store link outside context or without passed store prop');

	return (
		<NextLink href={`/store/${store.id}`} {...props} />
	);
}