import { Button } from "~/shared/ui/kit/button";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
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
			</div>
		</main>
	);
}