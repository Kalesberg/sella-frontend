import { cn } from "~/shared/lib/cn";
import { Heading } from "./Heading";

interface StageItemProps {
	title: string;
	isCompleted: boolean;
}

interface StageProps {
	title: string;
	content: string;
	stageItems: StageItemProps[];
}

const stagesList = [
	{
		title: "Stage 01",
		content:
			"Core functionality getting deployed. From storefront creation to a robust escrow system and dispute functionality",
		stageItems: [
			{
				title: "Token Generating Event",
				isCompleted: true,
			},
			{
				title: "Listing $SELLA on Uniswap",
				isCompleted: true,
			},
			{
				title: "Bridging to BNB chain",
				isCompleted: false,
			},
			{
				title: "Listing $SELLA on Pancakeswap",
				isCompleted: false,
			},
			{
				title: "Customization Update",
				isCompleted: false,
			},
			{
				title: "Analytics Dashboard",
				isCompleted: false,
			},
			{
				title: "Bounty Program",
				isCompleted: false,
			},
		],
	},
	{
		title: "Stage 02",
		content:
			"Time for some premium features and some serious marketing campaigns to attract even more sellers on board.",
		stageItems: [
			{
				title: "CEX Listings",
				isCompleted: false,
			},
			{
				title: "Staking Mechanism",
				isCompleted: false,
			},
			{
				title: "Massive Marketing Campaigns",
				isCompleted: false,
			},
			{
				title: "Discounts & Coupons",
				isCompleted: false,
			},
			{
				title: "Storefront Customization",
				isCompleted: false,
			},
			{
				title: "Advertisements",
				isCompleted: false,
			},
			{
				title: "Product Categorization & Filtering",
				isCompleted: false,
			},
			{
				title: "Blue Ticks",
				isCompleted: false,
			},
		],
	},
	{
		title: "Stage 03",
		content:
			"Focusing on premium features & loyalty schemes for both sellers and buyers.",
		stageItems: [
			{
				title: "Auto delivery for Digital Goods",
				isCompleted: false,
			},
			{
				title: "Bulk Import Shop Items From .XLS",
				isCompleted: false,
			},
			{
				title: "AI Tracking of Fraudulent Activity",
				isCompleted: false,
			},
			{
				title: "Create Shop Categories",
				isCompleted: false,
			},
			{
				title: "Tip System for Content Creators",
				isCompleted: false,
			},
			{
				title: "Governance Module",
				isCompleted: false,
			},
		],
	},
];

export function Roadmap() {
	return (
		<div className="mx-auto items-center py-32 px-[1rem] flex flex-col flex-grow justify-between gap-[4.5rem] max-md:gap-[3rem] relative w-full max-w-content m-auto pb-20">
			<div className="space-y-4 w-full">
				<Heading>Roadmap</Heading>

				<div className="text-black-60 text-balance max-w-[28.75rem]">
					Join us on our multi-stage journey to becoming the largest Web3 marketplace in the world!
				</div>
			</div>

			<div className="flex justify-center md:justify-center xl:justify-between w-full max-xl:flex-wrap gap-[2rem]">
				{stagesList.map(({ title, content, stageItems }, index) => (
					<div key={index} className="flex flex-col max-md:w-full">
						<Stage
							title={title}
							content={content}
							stageItems={stageItems}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

const Stage = ({ title, content, stageItems }: StageProps) => {
	return (
		<div className="bg-white/[.04] border border-secondary rounded-[1.25rem] p-4 space-y-6 w-full md:w-[30rem] md:m-2 xl:w-[22.5rem] xl:m-0">
			<div className="space-y-2">
				<div className="text-accent-100 font-semibold text-2xl">
					{title}
				</div>

				<div className="text-black-60">{content}</div>
			</div>
			<div className="space-y-[0.5rem]">
				{stageItems.map(({ title, isCompleted }, index) => (
					<StageItem
						key={index}
						title={title}
						isCompleted={isCompleted}
					/>
				))}
			</div>
		</div>
	);
};

const StageItem = ({ title, isCompleted }: StageItemProps) => {
	const strokeColor = isCompleted ? "#FFDD00" : "#BDBDBD";
	return (
		<div
			className={cn(
				'bg-white/[.02] border border-secondary rounded-[1.125rem] p-3 flex items-center justify-start gap-[0.5rem]',
				isCompleted ? 'text-yellow-400' : 'text-black-74',
			)}
		>
			<svg
				width="10"
				height="19"
				viewBox="0 0 10 19"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M4.99935 6.16675C6.8403 6.16675 8.33268 7.65913 8.33268 9.50008C8.33268 11.341 6.8403 12.8334 4.99935 12.8334M4.99935 6.16675C3.1584 6.16675 1.66602 7.65913 1.66602 9.50008C1.66602 11.341 3.1584 12.8334 4.99935 12.8334M4.99935 6.16675V1.16675M4.99935 12.8334V17.8333"
					stroke={strokeColor}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<span className={isCompleted ? "text-accent-100" : "text-black-74"}>
				{title}
			</span>
		</div>
	);
};
