'use client';

import { HTMLAttributes } from 'react';
import { Form } from 'react-final-form';
import { z } from 'zod';
import { zodValidate } from '~/shared/lib/zod-final-form';
import { DividerWithElement } from '~/shared/ui/kit/divider';
import { VImageUploader, VTextControl } from '~/shared/ui/validation-inputs';

export const schema = z.object({
	userName: z.string().min(3, 'Min length is 3'),
	avatar: z.instanceof(File)
});

export type SchemaType = z.infer<typeof schema>

type RegisterFormProps = HTMLAttributes<HTMLFormElement> & {
	id: string;
	onActionFulfiled?: (values: SchemaType) => void;
};

export function RegisterForm({ onActionFulfiled, ...props }: RegisterFormProps) {
	const onSubmit = (values: SchemaType) => {
		onActionFulfiled?.(values);
	};

	return (
		<Form onSubmit={onSubmit} validate={zodValidate(schema)}>
			{({ handleSubmit }) => (
				<form
					className='flex flex-col w-full gap-[1rem]'
					{...props} onSubmit={handleSubmit}
				>
					<DividerWithElement className='gap-[1rem] mb-[1rem]'>
						<VImageUploader
							label='Upload Avatar' name='avatar'
							className='rounded-full'
						/>
					</DividerWithElement>

					<VTextControl.Root className='w-full' name='userName'>
						<VTextControl.Label>Product Description</VTextControl.Label>
						<VTextControl.Input
							className='text-center'
							size='2xl' placeholder="@username"
						/>
						<VTextControl.ErrorText />
					</VTextControl.Root>

					<p className='text-black-60 text-center'>
						Select your username. This will be your unique identifier on
						Sella — choose a name that truly represents you or your brand.
					</p>
				</form>
			)}
		</Form>
	);
}