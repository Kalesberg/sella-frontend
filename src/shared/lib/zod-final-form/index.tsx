import { z } from "zod";

type ValidationErrors = Record<string, string>

function flatternZodError(err: z.ZodError): ValidationErrors {
	return err.errors.reduce(
		(prev, e) => ({
			...prev,
			[e.path.join(".")]: e.message,
		}),
		{} as ValidationErrors
	);
}

export const zodValidate = (schema: z.Schema) =>
	(values: object): ValidationErrors => {
		const res = schema.safeParse(values);
		if (!res.success) {
			return flatternZodError(res.error);
		}
		return {};
	};