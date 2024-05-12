import { Button } from "~/shared/ui/kit/button";
import { Input } from "~/shared/ui/kit/input";

export function ActionControls() {
	return (
		<div className="flex gap-[1rem]">
			<div className="relative">
				<Input
					className="ps-[5.25rem] rounded-[1.25rem] border border-secondary"
					placeholder="yourstorefront"
				/>
				<span className="flex items-center absolute top-0 left-0 h-full px-[1rem]">
					sella.me/
				</span>
			</div>

			<Button size="lg">Open Storefront</Button>
		</div>
	);
}
