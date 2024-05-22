import { StoreCardItem } from "~/entities/store";
import { Store } from "~/shared/api/model";
import { Pagination } from "~/shared/ui/kit/pagination";

export function StoreList({ initialData }: { initialData: Store[] }) {

	return (
		<>
			<div className="grid grid-cols-2 gap-10 max-w-content m-auto max-md:grid-cols-1 px-4">
				{initialData.map((store) => (
					<div key={store.id} className="w-full">
						<StoreCardItem store={store}/>
					</div>
				))}
			</div>

			{/*TODO mobile pagination*/}
			<Pagination
				className="max-w-content m-auto max-md:max-w-full max-md:mx-4 max-md:overflow-auto"
				count={190}
				pageSize={10}
				siblingCount={1}
				defaultPage={1}
			/>
		</>
	)
}