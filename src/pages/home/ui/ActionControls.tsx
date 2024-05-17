import { StoreInputAddon } from "~/entities/store";
import { cn } from "~/shared/lib/cn";
import { Button } from "~/shared/ui/kit/button";
import { Input, InputGroup } from "~/shared/ui/kit/input";

export function ActionControls() {
	return (
		<div className="flex gap-[1rem] flex-wrap w-full">
			<StoreInputAddon>
				{({ Component: Addon, inputClassName }) => (
					<InputGroup>
						<Input
							className={cn("rounded-[1.25rem] border border-secondary", inputClassName)}
							placeholder="yourstorefront"
						/>
						<Addon className='text-white' />
					</InputGroup>
				)}
			</StoreInputAddon>

			<Button className="w-full md:w-auto" size="lg">
				Open Storefront
			</Button>
		</div>
	);
}