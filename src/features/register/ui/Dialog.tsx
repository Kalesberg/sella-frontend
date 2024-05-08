import { DotLottiePlayer } from '@dotlottie/react-player';
import { useState } from 'react';
import { Form } from 'react-final-form';
import { z } from 'zod';
import { zodValidate } from '~/shared/lib/zod-final-form';
import { Icons } from '~/shared/ui/icons';
import { Button } from '~/shared/ui/kit/button';
import * as Dialog from '~/shared/ui/kit/dialog';
import { DividerWithText } from '~/shared/ui/kit/divider';
import { VTextControl } from '~/shared/ui/validation-inputs';

const schema = z.object({
	userName: z.string().min(3, 'Min length is 3')
});

type SchemaType = z.infer<typeof schema>

type RegisterDialogProps = Dialog.RootProps;

export function RegisterDialog(props: RegisterDialogProps) {
	const [values, setValues] = useState<SchemaType | null>(null);

	const onSubmit = (values: SchemaType) => {
		setValues(values);
	}

	const onSuccessClose = () => {
		props?.onOpenChange?.({ open: false });

		// onActionFulfiled
	}

	const templateBaseContent = () => (
		<Dialog.Content className='transition-all'>
			<Dialog.CloseButton />

			<Dialog.ContentHeading>
				<Dialog.Title>First things first</Dialog.Title>
				<Dialog.Description>
					Let&apos;s get you authenticated via Twitter, so we can get the ball rolling.
				</Dialog.Description>
			</Dialog.ContentHeading>

			<div className='flex flex-col w-full gap-[2rem]'>
				<Button className='w-full gap-[0.5rem]' colorPallete='gray' size='lg'>
					<Icons.Xtwitter /> Connect X
				</Button>

				<DividerWithText>
					And
				</DividerWithText>

				<div className='flex flex-col gap-[1rem] w-full'>
					<VTextControl
						name='userName' size='xl'
						placeholder='@username'
						className='text-center h-[6.25rem]'
						rootProps={{ className: 'w-full' }}
					/>

					<p className='text-black-60 text-center'>
						Select your username. This will be your unique identifier on
						Sella — choose a name that truly represents you or your brand.
					</p>
				</div>
			</div>

			<Dialog.ContentFooter>
				<Button className='w-full' size='lg'>
					Continue
				</Button>
			</Dialog.ContentFooter>
		</Dialog.Content>
	)

	const templateSuccessContent = () => (
		<Dialog.Content className='transition-all w-[28.125rem]'>
			<Dialog.CloseButton />

			<Dialog.ContentHeading>
				<Dialog.Title>Welcome, {values?.userName}</Dialog.Title>
				<Dialog.Description>
					This could be the beginning of something special. Just a few more formalities,
					and we&apos;ll have your shop set up in no time.
				</Dialog.Description>
			</Dialog.ContentHeading>

			<DotLottiePlayer
				src='/lottie/chicken.lottie' autoplay
				className='size-[11rem]'
			/>

			<Dialog.ContentFooter>
				<Dialog.CloseTrigger asChild>
					<Button className='w-full' size='lg'>
						Continue
					</Button>
				</Dialog.CloseTrigger>
			</Dialog.ContentFooter>
		</Dialog.Content>
	)

	return (
		<Dialog.Root 
			{...props} 
			onOpenChange={d => values ? (!d.open && onSuccessClose()) : props?.onOpenChange?.(d)}
			onExitComplete={() => {
				setValues(null);
				props?.onExitComplete?.();
			}}
		>
			<Dialog.Backdrop />
			<Dialog.Positioner>
				<Form onSubmit={onSubmit} validate={zodValidate(schema)}>
					{props => (
						<form onSubmit={props.handleSubmit}>
							{values ? templateSuccessContent() : templateBaseContent()}
						</form>
					)}
				</Form>
			</Dialog.Positioner>
		</Dialog.Root>
	);
}