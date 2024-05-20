'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "~/shared/ui/icons"
import { Select } from "~/shared/ui/kit"
import { Button } from "~/shared/ui/kit/button"

export function NavSelect() {
	const items = [
		{ label: 'My Orders', value: '/dashboard/orders' },
		{ label: 'My Sales', value: '/dashboard/sales' },
	]

	const pathname = usePathname();

	return (
		<Select.Root
			items={items}
			defaultValue={pathname ? [pathname] : undefined}
		>
			<Select.Control>
				<Select.Trigger asChild>
					<Button colorPallete='gray'>
						<Select.ValueText />

						<Icons.ChevronDown />
					</Button>
				</Select.Trigger>
			</Select.Control>
			<Select.Positioner>
				<Select.Content>
					<Select.ItemGroup id='options'>
						{items.map((item) => (
							<Link href={item.value} key={item.value}>
								<Select.Item item={item}>
									<Select.ItemText>{item.label}</Select.ItemText>
								</Select.Item>
							</Link>
						))}
					</Select.ItemGroup>
				</Select.Content>
			</Select.Positioner>
		</Select.Root>
	)
}