'use client';

import { Product } from "~/shared/api/model";
import { Pagination } from "~/shared/ui/kit/pagination";
import { FlexTable } from "~/shared/ui/kit";
import { IconButton } from "~/shared/ui/kit/button";
import { Icons } from "~/shared/ui/icons";
import { ProductManageDialog } from "~/features/product/manage";
import { ProductCard, ProductPrice } from "~/entities/product";
import { useEditModeContext } from "../model/edit-mode";
import { cn } from "~/shared/lib/cn";

interface ProductsStreamProps {
	initialData: Product[]
	className?: string
}

export function ProductsStream({ initialData, className }: ProductsStreamProps) {
	const products = initialData;
	const { enabled: editModeEnabled } = useEditModeContext();

	return (
		<div className={cn('flex flex-col gap-[3rem] w-full', className)}>
			{editModeEnabled ? (
				<ProductsEditTable products={products} />
			) : (
				<ProductsGrid products={products} />
			)}

			<Pagination
				count={190} pageSize={10}
				siblingCount={1} defaultPage={1}
			/>
		</div>
	);
}

function ProductsGrid({ products }: { products: Product[] }) {
	return (
		<div className='grid grid-cols-4 gap-[2.5rem] w-full'>
			{products.map(p => (
				<ProductCard.Root key={p.id} product={p}>
					<ProductCard.Image />

					<ProductCard.Content>
						<ProductCard.Title />
						<ProductCard.Description />
						<ProductCard.Price />
					</ProductCard.Content>
				</ProductCard.Root>
			))}
		</div>
	);
}

const tableConfig = [
	{ width: '3.75rem' },
	{ width: '100%' },
	{ width: '8.9375rem' },
	{ width: '8.9375rem' },
	{ width: '17.1875rem' },
	{ width: '17.1875rem' },
	{ width: '4.375rem' },
]


function ProductsEditTable({ products }: { products: Product[] }) {
	return (
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
				{products.map((p, index) => (
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
										colorPalette='gray' size='sm'
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
	);
}