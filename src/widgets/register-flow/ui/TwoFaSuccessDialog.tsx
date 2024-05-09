'use client';

import { DotLottiePlayer } from '@dotlottie/react-player';
import { Button } from '~/shared/ui/kit/button';
import * as Dialog from '~/shared/ui/kit/dialog';

type TwoFaSuccessDialogProps = Dialog.RootProps & {
	onContinue: () => void
}

export function TwoFaSuccessDialog({ onContinue, ...props }: TwoFaSuccessDialogProps) {
	return (
		<Dialog.Root {...props}>
			<Dialog.Backdrop />

			<Dialog.Positioner>
				<Dialog.Content>
					<Dialog.CloseButton />

					<Dialog.ContentHeading>
						<Dialog.Title>Account Secured</Dialog.Title>
						<Dialog.Description>
							Your account is now securely set up! Let’s get your shop running.
						</Dialog.Description>
					</Dialog.ContentHeading>

					<DotLottiePlayer
						src='/lottie/key.lottie'
						className='size-[11rem]' autoplay loop
					/>

					<Dialog.ContentFooter>
						<Button colorPallete='gray' size='lg' className='w-full' >
							Go to Market
						</Button>
						<Button
							className='w-full' size='lg'
							onClick={onContinue}
						>
							Open Storefront
						</Button>
					</Dialog.ContentFooter>
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog.Root>
	);
}