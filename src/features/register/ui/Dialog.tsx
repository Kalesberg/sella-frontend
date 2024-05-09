'use client';

import { useId, useState } from 'react';
import { Button } from '~/shared/ui/kit/button';
import * as Dialog from '~/shared/ui/kit/dialog';
import { SuccessDialogContent } from './SuccessDialog';
import { ConnectAccountDialogContent } from './ConnectAccountDialog';
import { RegisterForm, SchemaType } from './RegisterForm';

type RegisterDialogProps = Dialog.RootProps;

export function RegisterDialog(props: RegisterDialogProps) {
	const [isAuthorized, setIsAuthorized] = useState(false);
	const [values, setValues] = useState<SchemaType | null>(null);

	const onSuccessClose = () => {
		props?.onOpenChange?.({ open: false });
		// onActionFulfiled
	}

	const formId = useId();

	const dialogContent = () => (
		<>
			<Dialog.CloseButton />

			<Dialog.ContentHeading>
				<Dialog.Title>First things first</Dialog.Title>
				<Dialog.Description>
					Let&apos;s get you authenticated via Twitter, so we can get the ball rolling.
				</Dialog.Description>
			</Dialog.ContentHeading>

			<RegisterForm id={formId} onActionFulfiled={setValues} />

			<Dialog.ContentFooter>
				<Button form={formId} className='w-full' size='lg'>
					Continue
				</Button>
			</Dialog.ContentFooter>
		</>
	)

	return (
		<Dialog.Root
			{...props}
			onOpenChange={d => values ? !d.open && onSuccessClose() : props?.onOpenChange?.(d)}
		>
			<Dialog.Backdrop />

			<Dialog.Positioner>
				<Dialog.Content>
					<Dialog.CloseButton />

					{isAuthorized ? (
						values ? (
							<SuccessDialogContent
								formData={values}
							/>
						) : (
							dialogContent()
						)
					) : (
						<ConnectAccountDialogContent
							onConnectClick={() => setIsAuthorized(true)}
						/>
					)}
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog.Root>
	);
}