import Image from "next/image";
import TokenInfographicsImage from "../assets/token-infographics.png";

export function TokenInfographics() {
	return (
		<div className="py-32 bg-black-06 ">
			<div className="max-w-screen-xl mx-auto space-y-12">
				<div className="space-y-4">
					<div className="text-5xl text-white">Token Infographics</div>
					<div className="text-black-60 text-balance w-1/3">
						Join 40M+ people using Linktree for their link in bio. One link to
						help you share everything you create.
					</div>
				</div>

				<Image
					src={TokenInfographicsImage}
					alt="Token Infographics"
					className="w-full"
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
}
