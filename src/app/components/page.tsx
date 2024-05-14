'use client'

import { Button } from "~/shared/ui/kit/button";
import { Icons } from "~/shared/ui/icons";
import { PinInput } from "~/shared/ui/kit/pin-input";
import { VTextControl } from "~/shared/ui/validation-inputs";
import { z } from "zod";
import { Form } from "react-final-form";
import { zodValidate } from "~/shared/lib/zod-final-form";
import { Product, Store } from "~/shared/api/model";
import { StoreCard } from "~/entities/store";
import { ProductCard } from "~/entities/product";
import { Pagination } from "~/shared/ui/kit/pagination";
import { Controls, DotLottiePlayer } from "@dotlottie/react-player";
import { useDialogState } from "~/shared/lib/dialog";
import { RegisterDialog } from "~/features/register";
import { AuthChannelsSetupTwoFaDialog } from "~/features/auth-channels";
import { RegisterFlowDialog } from "~/widgets/register-flow";
import { StoreCreateDialog } from "~/features/store/create";
import { ProductCreateDialog } from "~/features/product/create";
import { RadioGroup } from "~/shared/ui/kit";
import { ProductManageDialog } from "~/features/product/manage";

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

				<div className='flex flex-col gap-4'>
					<div className='flex gap-4'>
						{Object.entries(Icons).map(([iconName, Icon]) => (
							<Icon className='text-accent-100' key={iconName} />
						))}
					</div>

					<div className='grid grid-cols-3 gap-4'>
						<RegisterDialogTest />
						<Setup2faDialogTest />
						<StoreCreateDialogTest />
						<ProductCreateDialogTest />
						<ProductManageDialogTest />
						<RegisterFlowDialogTest />
					</div>
				</div>
			</div>

			<div className='flex gap-8'>
				<RadioGroupTest />

				<div className='flex flex-col gap-3'>
					<PinInput length={4} defaultValue={['2', '3']} />
					<PinInput length={4} error defaultValue={['2']} />
				</div>

				<div className='flex flex-col gap-3'>
					<ValidationTest />

					<Pagination count={190} pageSize={10} siblingCount={1} defaultPage={1} />
				</div>
			</div>

			<div className='flex gap-8 items-start'>
				<StoreCardTest />
				<ProductCardTest />

				<DotLottiePlayer className='size-[15rem]' src='/lottie/chicken.lottie' autoplay>
					<Controls />
				</DotLottiePlayer>
			</div>
		</main>
	);
}

function RadioGroupTest(props: RadioGroup.RootProps) {
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

const schema = z.object({
	test: z.string().min(3, 'Min 3 symbols')
})

function ValidationTest() {
	return (
		<Form
			onSubmit={() => { return; }}
			validate={zodValidate(schema)}
		>
			{() => (
				<div className='flex gap-4'>
					<VTextControl.Root name='test'>
						<VTextControl.Label>Input</VTextControl.Label>
						<VTextControl.Input />
						<VTextControl.Description>
							Description
						</VTextControl.Description>
						<VTextControl.ErrorText />
					</VTextControl.Root>
				</div>
			)}
		</Form>
	);
}

const store: Store = {
	id: 1,
	name: 'Store Name',
	shortName: '@storename',
	description: 'Market, Limit, Stop Limit, and Auction Mode orders.',
	isVerified: true,
	previewImage: null,
	rating: {
		value: 4.9,
		reviewsCount: 575
	}
}

function StoreCardTest() {
	return (
		<StoreCard.Root store={store}>
			<StoreCard.Image />

			<StoreCard.Content>
				<StoreCard.Title />
				<StoreCard.Description />
				<StoreCard.Rating />
			</StoreCard.Content>
		</StoreCard.Root>
	);
}

const product: Product = {
	id: 2,
	name: 'Product Name',
	description: 'Market, Limit, Stop Limit, and Auction Mode orders.',
	shortDescription: 'Market, Limit, Stop Limit, and Auction Mode orders.',
	previewImage: null,
	galleryImages: [],
	category: 'Category',
	price: 0.99
}

function ProductCardTest() {
	return (
		<ProductCard.Root product={product}>
			<ProductCard.Image />

			<ProductCard.Content>
				<ProductCard.Title />
				<ProductCard.Description />
				<ProductCard.Price />
			</ProductCard.Content>
		</ProductCard.Root>
	);
}

function RegisterDialogTest() {
	const { isOpen, open, handleOpenChange } = useDialogState();

	return (
		<>
			<Button colorPallete='gray' onClick={open}>
				Register
			</Button>

			<RegisterDialog
				open={isOpen} onOpenChange={handleOpenChange}
			/>
		</>
	);
}

function StoreCreateDialogTest() {
	const { isOpen, open, handleOpenChange } = useDialogState();

	return (
		<>
			<Button colorPallete='gray' onClick={open}>
				Create Store
			</Button>

			<StoreCreateDialog
				open={isOpen} onOpenChange={handleOpenChange}
			/>
		</>
	);
}

function ProductCreateDialogTest() {
	const { isOpen, open, handleOpenChange } = useDialogState();

	return (
		<>
			<Button colorPallete='gray' onClick={open}>
				Create Product
			</Button>

			<ProductCreateDialog
				storeId={1}
				open={isOpen}
				onOpenChange={handleOpenChange}
			/>
		</>
	);
}

function ProductManageDialogTest() {
	const { isOpen, open, handleOpenChange } = useDialogState();

	return (
		<>
			<Button colorPallete='gray' onClick={open}>
				Manage Product
			</Button>

			<ProductManageDialog
				product={product}
				open={isOpen}
				onOpenChange={handleOpenChange}
			/>
		</>
	);
}

function Setup2faDialogTest() {
	const { isOpen, open, handleOpenChange } = useDialogState();

	return (
		<>
			<Button colorPallete='gray' onClick={open}>
				Setup 2fa
			</Button>

			<AuthChannelsSetupTwoFaDialog
				open={isOpen} onOpenChange={handleOpenChange}
				cancelButton={
					<Button className='w-full' colorPallete='gray'>
						Setup Later
					</Button>
				}
			/>
		</>
	);
}

function RegisterFlowDialogTest() {
	const { isOpen, open, handleOpenChange } = useDialogState();

	return (
		<>
			<Button onClick={open}>
				Register Flow
			</Button>

			<RegisterFlowDialog
				open={isOpen}
				onOpenChange={handleOpenChange}
			/>
		</>
	);
}