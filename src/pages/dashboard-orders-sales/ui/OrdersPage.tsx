import { Heading } from "~/shared/ui/kit/heading";
import { fetchOrders } from "../api/orders";
import { OrdersTable } from "./OrdersTable";
import { NavSelect } from "./NavSelect";

export async function OrdersPage() {
	const response = await fetchOrders();

	return (
		<div className='flex flex-col gap-[3rem] w-full max-w-content mx-auto'>
			<div className='flex gap-[1rem] items-center w-full justify-between'>
				<Heading>
					My Orders <span className='text-black-40'>
						{response.total}
					</span>
				</Heading>

				<NavSelect />
			</div>

			<OrdersTable initialData={response} />
		</div>
	);
}