import { Transaction } from "~/shared/api/model";
import { Badge } from "~/shared/ui/kit/badge";
import { IconButton } from "~/shared/ui/kit/button";
import { Icons } from "~/shared/ui/icons";

export function TransactionStatusBadge({ status }: { status: Transaction['status']; }) {
	switch (status) {
		case 'new':
			return <Badge colorPalette='accent'>New</Badge>;
		default:
			return (
				<Badge className='capitalize'>
					{status}
				</Badge>
			);
	}
}

export function TransactionActionButton({ transaction }: { transaction: Transaction; }) {
	if (transaction.fulfillmentStatus != 'fulfilled')
		return null;

	return (
		<a href={transaction.transactionUrl} target='_blank'>
			<IconButton className='backdrop-blur-[1rem]' colorPalette='gray' size='sm'>
				<Icons.Package />
			</IconButton>
		</a>
	);
}
