import { PageDashboardStore } from "~/pages/dashboard-store";

interface PageProps {
	params: { storeId: string }
}

export default function Page({ params }: PageProps) {
	return (
		<PageDashboardStore
			storeId={Number(params.storeId)}
		/>
	);
}