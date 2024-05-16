import { ProductId } from "~/shared/api/model";
import { Button } from "~/shared/ui/kit/button";

interface DeleteButtonProps {
	productId: ProductId,
	onActionFulfiled?: () => void
}

export function DeleteButton({ onActionFulfiled }: DeleteButtonProps) {
	return (
		<Button
			variant='subtle' colorPalette='red'
			size='lg' onClick={onActionFulfiled}
		>
			Remove Product
		</Button>
	);
}
