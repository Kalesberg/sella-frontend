import Image from "next/image";
import TokenInfographicsImage from "../assets/token-infographics.png";
import { PreviewImage } from "~/shared/ui/image";

export function TokenInfographics() {
	return (
		<div className="py-32 bg-black-06 ">
			<div className="max-w-screen-xl mx-auto space-y-12">
				<div className="space-y-4">
					<h1 className="text-5xl font-semibold text-white">
						Token Infographics
					</h1>
					<div className="text-black-60 text-balance w-1/3">
						Join 40M+ people using Linktree for their link in bio. One link to
						help you share everything you create.
					</div>
				</div>

				<PreviewImage
					src={null}
					about="Token Infographics"
					alt="Token Infographics"
					className="w-full h-[35rem]"
				/>
			</div>
		</div>
	);
}
