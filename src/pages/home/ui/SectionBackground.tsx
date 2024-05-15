export function Background() {
	return (
		<div className="absolute top-0 left-0 w-full h-full">
			<div
				className="absolute top-[-10rem] w-full h-[calc(100%+10rem)] opacity-50 rounded-[3rem]"
				style={{
					background:
						"radial-gradient(79.06% 66.04% at 0% 100%, rgb(53, 53, 53) 0%, rgb(15, 15, 15) 100%)",
				}}
			/>
			<div
				className="absolute top-[-10rem] w-full h-[calc(100%+10rem)] opacity-50 rounded-[3rem]"
				style={{
					background:
						"radial-gradient(87.01% 70.71% at 100% 100%, rgb(254, 200, 5, 0.4) 0%, rgb(223, 39, 39, 0.1) 50%, transparent 100%)",
				}}
			/>
		</div>
	);
}