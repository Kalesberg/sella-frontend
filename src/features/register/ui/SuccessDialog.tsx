'use client';

import { DotLottiePlayer } from '@dotlottie/react-player';
import { Button } from '~/shared/ui/kit/button';
import * as Dialog from '~/shared/ui/kit/dialog';
import { SchemaType } from './RegisterForm';

type SuccessDialogProps = {
	formData: SchemaType;
};

export function SuccessDialogContent({ formData }: SuccessDialogProps) {
	return (
		<>
			<Dialog.CloseButton />

			<Dialog.ContentHeading>
				<Dialog.Title>Welcome, {formData.userName}</Dialog.Title>
				<Dialog.Description>
					This could be the beginning of something special. Just a few more formalities,
					and we&apos;ll have your shop set up in no time.
				</Dialog.Description>
			</Dialog.ContentHeading>

			<DotLottiePlayer
				src='/lottie/chicken.lottie' autoplay
				className='size-[11rem]' />

			<Dialog.ContentFooter>
				<Dialog.CloseTrigger asChild>
					<Button className='w-full' size='lg'>
						Continue
					</Button>
				</Dialog.CloseTrigger>
			</Dialog.ContentFooter>
		</>
	);
}