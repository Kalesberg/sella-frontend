'use client';

import { HTMLAttributes } from 'react';
import { Form } from 'react-final-form';
import { z } from 'zod';
import { Product } from '~/shared/api/model';
import { cn } from '~/shared/lib/cn';
import { zodValidate } from '~/shared/lib/zod-final-form';
import { VImageUploader, VTextAreaControl, VTextControl, VUploader } from '~/shared/ui/validation-inputs';

export const schema = z.object({
	name: z.string().min(3, 'Min length is 3'),
	price: z.coerce.number().min(1, 'Min price is 1 USDT'),
	description: z.string().nullable(),
	shortDescription: z.string(),
	previewImage: z.instanceof(File),
	galleryImages: z.array(z.instanceof(File)).optional()
});

export type SchemaType = z.infer<typeof schema>

type CreateFormProps = HTMLAttributes<HTMLFormElement> & {
	id: string;
	storeId: number,
	onActionFulfiled?: (product: Product) => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CreateForm({ onActionFulfiled, storeId, className, ...props }: CreateFormProps) {
	const onSubmit = (values: SchemaType) => {
		const store: Product = {
			id: 1,
			...values,
			previewImage: URL.createObjectURL(values.previewImage),
			galleryImages: values.galleryImages?.map(URL.createObjectURL) ?? [],
			category: 'Category'
		}

		onActionFulfiled?.(store);
	};

	return (
		<Form onSubmit={onSubmit} validate={zodValidate(schema)}>
			{({ handleSubmit }) => (
				<form
					{...props} onSubmit={handleSubmit}
					className={cn('flex flex-col w-full gap-[2rem]', className)}
				>
					<div className='flex gap-[2rem] w-full'>
						<VImageUploader
							label='Attach Preview' name='previewImage'
							className='flex-shrink-0 size-[11.625rem] rounded-[1.25rem]'
						/>
						<div className='flex flex-col justify-between'>
							<VTextControl
								label='Product Name'
								name='name' size='default'
								rootProps={{ className: 'w-full' }}
							/>

							<VTextControl
								label='Product Price'
								name='proce' size='default' 
								type='number' min={1}
								placeholder='0 USDT'
								rootProps={{ className: 'w-full' }}
							/>
						</div>
					</div>

					<VTextControl
						label='Product Description'
						name='shortDescription' size='default'
						placeholder="Let's make it short and sweet!"
						rootProps={{ className: 'w-full' }}
					/>

					<VTextAreaControl
						label='Full Description'
						name='description' size='default'
						placeholder='Can be one sentence, a short paragraph'
						className='h-[5rem]'
						rootProps={{ className: 'w-full' }}
					/>

					<VUploader
						label='Product Images'
						name='galleryImages' multiple
						rootProps={{ className: 'w-full' }}
					/>
				</form>
			)}
		</Form>
	);
}