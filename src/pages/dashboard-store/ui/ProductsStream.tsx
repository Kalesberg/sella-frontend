'use client';

import { Product } from "~/shared/api/model";
import { Pagination } from "~/shared/ui/kit/pagination";
import { FlexTable } from "~/shared/ui/kit";
import { IconButton } from "~/shared/ui/kit/button";
import { Icons } from "~/shared/ui/icons";
import { ProductManageDialog } from "~/features/product/manage";
import { ProductPrice } from "~/entities/product";

const tableConfig = [
	{ width: '3.75rem' },
	{ width: '100%' },
	{ width: '8.9375rem' },
	{ width: '8.9375rem' },
	{ width: '17.1875rem' },
	{ width: '17.1875rem' },
	{ width: '4.375rem' },
]

export function ProductsStream({ initialData }: { initialData: Product[] }) {
	return (
		<div className='flex flex-col gap-[3rem] w-full'>
			<FlexTable.Root className='w-full' config={tableConfig}>
				<FlexTable.Head>
					<span>#</span>
					<span>Product</span>
					<span>Rating</span>
					<span>Price</span>
					<span>Reviews</span>
					<span>Total Sales</span>
					<span />
				</FlexTable.Head>

				<FlexTable.Body>
					{initialData.map((p, index) => (
						<FlexTable.Row key={p.id} >
							<span>{index + 1}</span>
							<span className='text-white'>
								{p.name}
							</span>
							<span>

							</span>
							<span>	
								<ProductPrice product={p} />
							</span>
							<span>165</span>
							<span>27</span>
							<div>
								<ProductManageDialog
									product={p}
									triggerElement={
										<IconButton
											className='border border-secondary'
											colorPallete='gray' size='sm'
										>
											<Icons.Settings className='size-[1.25rem]' />
										</IconButton>
									}
								/>
							</div>
						</FlexTable.Row>
					))}
				</FlexTable.Body>
			</FlexTable.Root>

			<Pagination
				count={190} pageSize={10}
				siblingCount={1} defaultPage={1}
			/>
		</div>
	);
}