'use client';

import { HTMLAttributes } from 'react';
import { Form } from 'react-final-form';
import { z } from 'zod';
import { Store } from '~/shared/api/model';
import { zodValidate } from '~/shared/lib/zod-final-form';
import { DividerWithElement } from '~/shared/ui/kit/divider';
import { VImageUploader, VTextControl } from '~/shared/ui/validation-inputs';

export const schema = z.object({
	name: z.string().min(3, 'Min length is 3'),
	url: z.string().min(3, 'Min length is 3'),
	description: z.string(),
	image: z.instanceof(File)
});

export type SchemaType = z.infer<typeof schema>

type CreateFormProps = HTMLAttributes<HTMLFormElement> & {
	id: string;
	onActionFulfiled?: (store: Store) => void;
};

export function CreateForm({ onActionFulfiled, ...props }: CreateFormProps) {
	const onSubmit = (values: SchemaType) => {
		const store: Store = {
			id: 1,
			name: values.name,
			shortName: values.url,
			description: values.description,
			isVerified: false,
			previewImage: URL.createObjectURL(values.image),
			rating: {
				value: 4.9,
				reviewsCount: 575
			}
		}

		onActionFulfiled?.(store);
	};

	return (
		<Form onSubmit={onSubmit} validate={zodValidate(schema)}>
			{({ handleSubmit }) => (
				<form
					className='flex flex-col w-full gap-[2rem]'
					{...props} onSubmit={handleSubmit}
				>
					<DividerWithElement className='gap-[1rem] mb-[1rem]'>
						<VImageUploader
							label='Storefront Image' name='image'
							className='rounded-full'
						/>
					</DividerWithElement>

					<div className='flex gap-[2rem] w-full'>
						<VTextControl.Root className='w-full' name='name'>
							<VTextControl.Label>Store Name</VTextControl.Label>
							<VTextControl.Input placeholder="Store name" />
							<VTextControl.ErrorText />
						</VTextControl.Root>

						<VTextControl.Root className='w-full' name='url'>
							<VTextControl.Label>Store URL</VTextControl.Label>
							<VTextControl.Input
								className='ps-[5.3rem]'
								placeholder="Store name"
							>
								<span className='flex items-center absolute top-0 h-full ps-[1rem]'>
									sella.me/
								</span>
							</VTextControl.Input>
							<VTextControl.ErrorText />
						</VTextControl.Root>
					</div>

					<VTextControl.Root className='w-full' name='description'>
						<VTextControl.Label>Store Description</VTextControl.Label>
						<VTextControl.Input placeholder="Can be one sentence, a short paragraph" />
						<VTextControl.ErrorText />
					</VTextControl.Root>
				</form>
			)}
		</Form>
	);
}