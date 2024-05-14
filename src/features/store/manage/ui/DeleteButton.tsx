import { StoreId } from "~/shared/api/model";
import { Button } from "~/shared/ui/kit/button";

interface DeleteButtonProps {
	storeId: StoreId,
	onActionFulfiled?: () => void
}

export function DeleteButton({ onActionFulfiled }: DeleteButtonProps) {
	return (
		<Button
			variant='subtle' colorPallete='red'
			size='lg' onClick={onActionFulfiled}
		>
			Remove Storefront
		</Button>
	);
}