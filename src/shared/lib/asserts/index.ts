export function invariant(predicate: unknown, errorMessage = 'Assertion Failed'): asserts predicate {
	if (!predicate) throw new Error(errorMessage);
}