import { Heading } from "~/shared/ui/kit/heading";
import { NavSelect } from "./NavSelect";
import { SalesTable } from "./SalesTable";
import { fetchSales } from "../api/sales";

export async function SalesPage() {
	const response = await fetchSales();

	return (
		<div className='flex flex-col gap-[3rem] w-full max-w-content mx-auto'>
			<div className='flex gap-[1rem] items-center w-full justify-between'>
				<Heading>
					My Sales <span className='text-black-40'>
						{response.total}
					</span>
				</Heading>

				<NavSelect />
			</div>

			<SalesTable initialData={response} />
		</div>
	);
}