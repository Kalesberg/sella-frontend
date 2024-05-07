import Image from 'next/image';
import HeroImage from '../assets/hero.png';
import { Input } from '~/shared/ui/kit/input';
import { Button } from '~/shared/ui/kit/button';
import { PropsWithChildren } from 'react';
import { Icons } from '~/shared/ui/icons';

export function Hero() {
	return (
		<div
			className='flex flex-col relative h-[56.25rem] overflow-hidden rounded-b-[3rem] px-[1rem] pt-[10.375rem]'
		>
			<Background />

			<div className='flex flex-grow justify-between gap-[1rem] relative w-[calc(100%-8.75rem*2)] m-auto'>
				<div className='flex flex-col gap-[3rem] max-w-[35rem] w-full'>
					<h1 className='font-semibold text-[4.5rem] font-manrope leading-[1.1]'>
						Open your web3 storefront in seconds
					</h1>

					<FeaturesList />
					<ActionControls />
				</div>

				<Image
					src={HeroImage}
					alt='Hero image'
					className='w-[35rem]'
					width={1000} height={1000}
				/>
			</div>
		</div>
	);
}

function Background() {
	return (
		<div className='absolute top-0 left-0 w-full h-full'>
			<div
				className='absolute top-[-10rem] w-full h-[calc(100%+10rem)] opacity-50'
				style={{ background: 'radial-gradient(79.06% 66.04% at 0% 100%, rgb(53, 53, 53) 0%, rgb(15, 15, 15) 100%)' }}
			/>
			<div
				className='absolute top-[-10rem] w-full h-[calc(100%+10rem)] opacity-50'
				style={{ background: 'radial-gradient(87.01% 70.71% at 100% 100%, rgb(254, 200, 5, 0.4) 0%, rgb(223, 39, 39, 0.1) 50%, transparent 100%)' }}
			/>
		</div>
	);
}

function ActionControls() {
	return (
		<div className='flex gap-[1rem]'>
			<div className='relative'>
				<Input
					className='ps-[5.25rem] rounded-[1.25rem] border border-secondary'
					placeholder='yourstorefront'
				/>
				<span className='flex items-center absolute top-0 left-0 h-full px-[1rem]'>
					sella.me/
				</span>
			</div>

			<Button size='lg'>
				Open Storefront
			</Button>
		</div>
	);
}

function FeaturesList() {
	return (
		<div className='flex flex-col gap-[1rem] max-w-[28.75rem]'>
			<Feature label='Hassle Free'>
				It takes about 30 seconds to get your storefront running
			</Feature>
			<Feature label='Sell Anything'>
				From digital good, to physical items, services and anything else in between
			</Feature>
			<Feature label='No KYC'>
				Connect your wallet, reserve your handle, open your storefront & accept in stables!
			</Feature>
			<Feature label='100% Free'>
				Yup, it’s totally free to open up your storefront Sign up for a Premium tier to get more benefits!
			</Feature>
			<Feature label='Robust Escrow'>
				We prioritize security of all parties involved. Our our focus is on providing a safe and fair environment for everyone
			</Feature>
			<Feature label='Powered by $SELLA'>
				Unlock exclusive benefits by holding $SELLA. Share the platform&apos;s profits while enjoying a suite of premium perks.
			</Feature>
		</div>
	);
}

function Feature({ label, children }: PropsWithChildren<{ label: string }>) {
	return (
		<div className='flex gap-[0.75rem] items-center min-w-0'>
			<Icons.CircleChecked className='text-accent-100 size-[1.25rem] flex-shrink-0' />
			<p className='truncate text-black-60'>
				<span className='text-white'>{label}</span> <span>— {children}</span>
			</p>
		</div>
	);
}