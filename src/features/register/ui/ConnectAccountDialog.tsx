'use client';

import { Icons } from '~/shared/ui/icons';
import { Button } from '~/shared/ui/kit/button';
import * as Dialog from '~/shared/ui/kit/dialog';

type ConnectAccountDialogProps = {
	onConnectClick: () => void;
};

export function ConnectAccountDialogContent({ onConnectClick }: ConnectAccountDialogProps) {
	return (
		<>
			<Dialog.CloseButton />

			<Dialog.ContentHeading>
				<Dialog.Title>First things first</Dialog.Title>
				<Dialog.Description>
					Let&apos;s get you authenticated via Twitter, so we can get the ball rolling.
				</Dialog.Description>
			</Dialog.ContentHeading>

			<Dialog.ContentFooter>
				<Button
					className='w-full gap-[0.5rem]'
					colorPallete='social' size='lg'
					onClick={onConnectClick}
				>
					<Icons.Xtwitter /> Connect X
				</Button>
			</Dialog.ContentFooter>
		</>
	);
}