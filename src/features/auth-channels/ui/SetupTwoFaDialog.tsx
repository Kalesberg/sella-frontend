'use client';

import { ReactNode, useState } from 'react';
import { Form } from 'react-final-form';
import { z } from 'zod';
import { zodValidate } from '~/shared/lib/zod-final-form';
import { Icons } from '~/shared/ui/icons';
import { Button } from '~/shared/ui/kit/button';
import * as Dialog from '~/shared/ui/kit/dialog';
import { DividerWithElement } from '~/shared/ui/kit/divider';
import { VTextControl } from '~/shared/ui/validation-inputs';
import { VerifyEmailDialogContent } from './VerifyEmailDialog';

type SetupTwoFaDialogProps = Dialog.RootProps & {
	onActionFulfiled?: () => void,
	cancelButton?: ReactNode
};

const schema = z.object({
	email: z.string().email().optional()
});

export function SetupTwoFaDialog({ onActionFulfiled, cancelButton, ...props }: SetupTwoFaDialogProps) {
	const [isVerifyEmailOpened, setIsVerifyEmailOpened] = useState(false);
	const open = !!props?.open;

	const onSubmit = (values: z.infer<typeof schema>) => {
		setIsVerifyEmailOpened(true);
	}

	return (
		<>
			<VerifyEmailDialogContent
				{...props} open={open && isVerifyEmailOpened}
				onActionFulfiled={onActionFulfiled}
			/>

			<Dialog.Root
				{...props}
				open={open && !isVerifyEmailOpened}
			>
				<Dialog.Backdrop />

				<Dialog.Positioner>
					<Dialog.Content>
						<Dialog.CloseButton />

						<Form onSubmit={onSubmit} validate={zodValidate(schema)}>
							{({ form }) => (
								<>
									<Dialog.ContentHeading>
										<Dialog.Title>Set up 2FA</Dialog.Title>
										<Dialog.Description>
											What’s your preferred method for receiving Sella alerts?
											Select email, Telegram, or both –and you can always change this later.
										</Dialog.Description>
									</Dialog.ContentHeading>

									<div className='flex flex-col gap-[2rem] w-full'>
										<Button
											className='w-full gap-[0.5rem]'
											colorPallete='social' size='lg'
										>
											<Icons.Telegram /> Telegram
										</Button>

										<DividerWithElement className='w-full'>
											Or
										</DividerWithElement>

										<VTextControl
											name='email'
											label='Email Address' type='email'
										/>
									</div>

									<Dialog.ContentFooter>
										<Dialog.CloseTrigger asChild>
											{cancelButton ?? (
												<Button className='w-full' colorPallete='gray'>
													Cancel
												</Button>
											)}
										</Dialog.CloseTrigger>
										<Button onClick={form.submit} className='w-full' size='lg'>
											Continue
										</Button>
									</Dialog.ContentFooter>
								</>
							)}
						</Form>
					</Dialog.Content>
				</Dialog.Positioner>
			</Dialog.Root>
		</>
	);
}