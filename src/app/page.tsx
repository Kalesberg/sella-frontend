import { Button } from "~/shared/ui/kit/button";
import { Icons } from "~/shared/ui/icons";
import * as RadioGroup from "~/shared/ui/kit/radio-group";
import { PinInput } from "~/shared/ui/kit/pin-input";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center gap-16 p-24">
			<div className='flex gap-4'>
				<Button variant='outline'>
					Buy $SELLA
				</Button>
				<Button variant='solid'>
					Open Storefront
				</Button>
				<Button colorPallete='gray'>
					Open Storefront
				</Button>

				<div className='flex flex-col gap-3'>
					<Button variant='subtle' colorPallete='red'>
						<Icons.ThumbDown /> Negative
					</Button>
					<Button variant='subtle' colorPallete='red' active>
						<Icons.ThumbDown /> Negative
					</Button>
					<Button variant='subtle' colorPallete='green'>
						<Icons.ThumbUp /> Positive
					</Button>
					<Button variant='subtle' colorPallete='green' active>
						<Icons.ThumbUp /> Positive
					</Button>
				</div>

				{Object.entries(Icons).map(([iconName, Icon]) => (
					<Icon className='text-accent-100' key={iconName} />
				))}
			</div>

			<div className='flex gap-8'>
				<RadioGroupSection />

				<div className='flex flex-col gap-3'>
					<PinInput length={4} defaultValue={['2', '3']} />
					<PinInput length={4} error defaultValue={['2']} />
				</div>
			</div>
		</main>
	);
}

function RadioGroupSection(props: RadioGroup.RootProps) {
	const options = [
		{ id: '1', label: 'Pay with $SELLA' },
		{ id: '2', label: 'Pay with $USDT' },
		{ id: '3', label: 'Pay with $CLICK', disabled: true },
	]

	return (
		<RadioGroup.Root defaultValue="react" {...props}>
			{options.map((option) => (
				<RadioGroup.Item key={option.id} value={option.id} disabled={option.disabled}>
					<RadioGroup.ItemControl />
					<RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
				</RadioGroup.Item>
			))}
		</RadioGroup.Root>
	)
}