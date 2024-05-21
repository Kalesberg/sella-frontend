import { StoreId } from "~/shared/api/model";
import { Button } from "~/shared/ui/kit/button";

interface DeleteButtonProps {
	storeId: StoreId,
	onActionFulfilled?: () => void
}

export function DeleteButton({ onActionFulfilled }: DeleteButtonProps) {
	return (
		<Button
			variant='subtle' colorPalette='red'
			size='lg' onClick={onActionFulfilled}
		>
			Remove Storefront
		</Button>
	);
}
