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
		content: "Market, Limit, Stop Limit, and Auction Mode orders.",
		stageItems: [
			{
				title: "Setup of social channels",
				isCompleted: true,
			},
			{
				title: "Token Generating Event",
				isCompleted: true,
			},
			{
				title: "Listing $SELLA on Uniswap",
				isCompleted: false,
			},
			{
				title: "Customisation release",
				isCompleted: false,
			},
			{
				title: "Analytics release",
				isCompleted: false,
			},
		],
	},
	{
		title: "Stage 02",
		content: "Market, Limit, Stop Limit, and Auction Mode orders.",
		stageItems: [
			{
				title: "CEX Listings",
				isCompleted: false,
			},
			{
				title: "Broad Marketing Campaign",
				isCompleted: false,
			},
			{
				title: "Discount Coupons",
				isCompleted: false,
			},
			{
				title: "Storefront Customisation",
				isCompleted: false,
			},
			{
				title: "Advertisements Through Banners",
				isCompleted: false,
			},
			{
				title: "Cashback System",
				isCompleted: false,
			},
		],
	},
	{
		title: "Stage 03",
		content: "Market, Limit, Stop Limit, and Auction Mode orders.",
		stageItems: [
			{
				title: "Adding team members",
				isCompleted: false,
			},
			{
				title: "Bulk Import shop items .xls",
				isCompleted: false,
			},
			{
				title: "Rewards for purchases",
				isCompleted: false,
			},
			{
				title: "Create shop categories",
				isCompleted: false,
			},
			{
				title: "Premium features",
				isCompleted: false,
			},
		],
	},
];

export function Roadmap() {
	return (
		<div className="max-w-screen-xl mx-auto flex flex-col  justify-center items-center gap-12 py-32">
			<div className="space-y-4 w-full">
				<div className="text-5xl text-white">Roadmap</div>
				<div className="text-neutral-500 text-balance w-1/3">
					Join 40M+ people using Linktree for their link in bio. One link to
					help you share everything you create.
				</div>
			</div>
			<div className="grid grid-cols-3 gap-8 place-items-start">
				{stagesList.map(({ title, content, stageItems }, index) => (
					<Stage
						key={index}
						title={title}
						content={content}
						stageItems={stageItems}
					/>
				))}
			</div>
		</div>
	);
}

const Stage = ({ title, content, stageItems }: StageProps) => {
	return (
		<div className="bg-[#FFFFFF05] border border-neutral-800 rounded-xl p-4 space-y-6">
			<div className="space-y-2">
				<div className="text-yellow-400 font-semibold text-2xl">{title}</div>
				<div className="text-neutral-500">{content}</div>
			</div>
			<div className="space-y-2">
				{stageItems.map(({ title, isCompleted }, index) => (
					<StageItem key={index} title={title} isCompleted={isCompleted} />
				))}
			</div>
		</div>
	);
};

const StageItem = ({ title, isCompleted }: StageItemProps) => {
	return (
		<div
			className={
				`bg-neutral-800 border border-neutral-700 rounded-xl p-3 flex items-center justify-start gap-4 ` +
				(isCompleted ? "text-yellow-400" : "text-neutral-400")
			}
		>
			{/* TODO: ADD ICON */}
			{title}
		</div>
	);
};
