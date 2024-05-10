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
						<VTextControl
							label='Store Name'
							name='name' size='default'
							placeholder='Store name'
							rootProps={{ className: 'w-full' }}
						/>

						<VTextControl
							label='Store URL'
							name='url' size='default'
							className='ps-[5.3rem]'
							addonElement={
								<span className='flex items-center absolute top-0 h-full ps-[1rem]'>
									sella.me/
								</span>
							}
							rootProps={{ className: 'w-full' }}
						/>
					</div>

					<VTextControl
						label='Store Description'
						name='description' size='default'
						placeholder='Can be one sentence, a short paragraph'
						rootProps={{ className: 'w-full' }}
					/>
				</form>
			)}
		</Form>
	);
}