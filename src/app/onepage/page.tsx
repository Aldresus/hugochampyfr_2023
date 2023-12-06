import OnePageHome from "@/app/onepage/(homepage)/homepage";
import OnePageResume from "@/app/onepage/(resume)/resume";

export default function OnePage() {
	return (
		<div className="h-full flex flex-col gap-12">
			<div className="relative shrink-0 h-full w-full z-0">
				<div className="fixed h-full w-full">
					<OnePageHome />
				</div>
			</div>
			<div className="min-h-full w-full shrink-0 z-10">
				<OnePageResume />
			</div>
		</div>
	);
}
