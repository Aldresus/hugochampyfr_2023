import Title from "@/components/ui/title";
import Link from "next/link";
import Image from "next/image";
export default function OnePageProjetsTechnos() {
	return (
		<div className="min-h-screen w-full p-3 lg:p-24 flex flex-col gap-9 snap-start bg-accent">
			<div className="relative h-full w-full flex-1">
				<Link
					href={"https://technos.hugochampy.fr"}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src={"/projects/technos.png"}
						alt={"Technos.hugochampy.fr landing page screenshot"}
						className="object-cover object-top rounded-xl"
						fill
					/>
				</Link>
			</div>

			<div className="w-full">
				<Title size="h1" className="text-secondary-foreground">
					Technos.hugochampy.fr
				</Title>
				<Title size="h3" className="text-secondary-foreground gap-1">
					A test project to learn Remix.run and Mantine UI. It uses the Notion
					API to fetch data from my technology notion database.
				</Title>
			</div>
		</div>
	);
}
