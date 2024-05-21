import { Store } from "~/shared/api/model";
import { StoreCard, StoreLink } from "~/entities/store";

export function StoreCardItem ({ store }: { store: Store }) {
	return (
		<StoreLink store={store}>
			<StoreCard.Root store={store}>
				<StoreCard.Image />
				<StoreCard.Content>
					<StoreCard.Title />
					<StoreCard.Description />
					<StoreCard.Rating />
				</StoreCard.Content>
			</StoreCard.Root>
		</StoreLink>
	);
};