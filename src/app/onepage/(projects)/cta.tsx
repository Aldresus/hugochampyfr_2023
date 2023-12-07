import Title from "@/components/ui/title";

export default function OnePageProjetsCTA() {
	return (
		<div className="min-h-screen w-full p-3 lg:p-12 flex justify-center items-center snap-center bg-primary">
			<div className="flex flex-col gap-7">
				<Title size="main" className="text-primary-foreground">
					You know,
				</Title>
				<Title size="h1" className="pl-[3.375rem] text-primary-foreground">
					I&apos;m something of an entrepreneur myself.
				</Title>
			</div>
		</div>
	);
}
