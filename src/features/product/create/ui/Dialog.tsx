'use client';

import { Dialog } from '~/shared/ui/kit';
import { CreateForm } from './CreateForm';
import { ReactNode, useId } from 'react';
import { Button } from '~/shared/ui/kit/button';
import { Product, StoreId } from '~/shared/api/model';

type CreateDialogProps = Dialog.RootProps & {
	storeId: StoreId,
	onActionFulfiled?: (product: Product) => void
	cancelButton?: ReactNode
};

export function CreateDialog({ onActionFulfiled, cancelButton, storeId, ...props }: CreateDialogProps) {
	const formId = useId();

	return (
		<Dialog.Root {...props}>
			<Dialog.Backdrop />

			<Dialog.Positioner>
				<Dialog.Content className='w-[34.375rem] gap-[1.5rem]'>
					<Dialog.CloseButton />

					<Dialog.ContentHeading>
						<Dialog.Title>First Item Upload</Dialog.Title>
						<Dialog.Description>
							Attach an image that best represents your item. Name your listing, craft a 
							catchy description, and set a price. Remember, you can change any details later on.
						</Dialog.Description>
					</Dialog.ContentHeading>

					<CreateForm
						className='gap-[1rem]'
						id={formId} storeId={storeId}
						onActionFulfiled={onActionFulfiled}
					/>

					<Dialog.ContentFooter>
						{cancelButton ?? (
							<Dialog.CloseTrigger asChild>
								<Button className='w-full' colorPalette='gray'>
									Close
								</Button>
							</Dialog.CloseTrigger>
						)}
						<Button form={formId} className='w-full' size='lg'>
							Continue
						</Button>
					</Dialog.ContentFooter>
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog.Root>
	);
}
