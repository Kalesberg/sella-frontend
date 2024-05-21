import { FlexTable } from "~/shared/ui/kit";
import { OrdersResponse } from "../api/orders";
import { ProductRow } from "~/entities/product";
import { Badge } from "~/shared/ui/kit/badge";
import { Icons } from "~/shared/ui/icons";
import { Pagination } from "~/shared/ui/kit/pagination";
import { NotFoundScreen } from "./NotFoundScreen";

import { 
	TransactionStatusBadge, 
	TransactionActionButton 
} from "./TransactionElements";

const config = [
	{ width: '3.75rem' },
	{ width: '100%' },
	{ width: '13.875rem' },
	{ width: '10.25rem' },
	{ width: '10.25rem' },
	{ width: '10.25rem' },
	{ width: '6.875rem' },
	{ width: '4.375rem' },
]

export function OrdersTable({ initialData }: { initialData: OrdersResponse }) {
	const { data: orders, total } = initialData;

	if(!orders.length) {
		return (
			<NotFoundScreen>
				<Icons.PackageThin />

				{`You don't have any orders yet`}
			</NotFoundScreen>
		);
	}

	return (
		<div className='flex flex-col gap-[3rem] w-full'>
			<FlexTable.Root className='w-full' config={config}>
				<FlexTable.Head>
					<span>#</span>
					<span>Date</span>
					<span>Product</span>
					<span>Store</span>
					<span>Status</span>
					<span>Fulfillment Status</span>
					<span>Total Paid</span>
					<span />
				</FlexTable.Head>

				<FlexTable.Body className='text-[0.875rem]'>
					{orders.map((o, index) => (
						<FlexTable.Row key={o.id}>
							<span>{index + 1}</span>
							<span>
								{o.transaction.createdAt.format('MMM DD, hh:mm A')}
							</span>
							<span className='text-white'>
								<ProductRow product={o.product} />
							</span>
							<span className='text-black-60'>
								{o.store.name}
							</span>
							<span>
								<TransactionStatusBadge 
									status={o.transaction.status} 
								/>
							</span>
							<span>
								<Badge className='capitalize'>
									{o.transaction.fulfillmentStatus}
								</Badge>
							</span>
							<span className='text-accent-100'>
								{o.transaction.totalPaid} USDT
							</span>
							<span>
								<TransactionActionButton transaction={o.transaction} />
							</span>
						</FlexTable.Row>
					))}
				</FlexTable.Body>
			</FlexTable.Root>

			<Pagination count={total} pageSize={10} />
		</div>
	);
}