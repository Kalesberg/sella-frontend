import { useState } from 'react';
import { AuthChannelsSetupTwoFaDialog } from '~/features/auth-channels';
import { RegisterDialog } from '~/features/register';
import * as Dialog from '~/shared/ui/kit/dialog';
import { RegisterSuccessDialog } from './RegisterSuccessDialog';
import { TwoFaSuccessDialog } from './TwoFaSuccessDialog';

type ModalTypes = 
	'register'
	| 'register-success'
	| '2fa'
	| '2fa-success'
	| 'create-store'

export function FlowDialog(props: Dialog.RootProps) {
	const [currentModal, setCurrentModal] = useState<ModalTypes>('register');
	
	const isOpen = (modal: ModalTypes) => !!props?.open && currentModal == modal;
	const openModalAction = (modal: ModalTypes) => () => setCurrentModal(modal)

	return (
		<>
			<RegisterDialog
				{...props}
				open={isOpen('register')}
				onActionFulfiled={openModalAction('register-success')}
			/>

			<RegisterSuccessDialog
				{...props}
				open={isOpen('register-success')}
				onContinue={openModalAction('2fa')}
			/>

			<AuthChannelsSetupTwoFaDialog
				{...props}
				open={isOpen('2fa')}
				onActionFulfiled={openModalAction('2fa-success')}
			/>

			<TwoFaSuccessDialog
				{...props}
				open={isOpen('2fa-success')}
				onContinue={openModalAction('create-store')}
			/>
		</>
	);
}