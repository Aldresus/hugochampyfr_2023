import OnePageHome from "@/app/onepage/(homepage)/homepage";
import OnePageSkills from "@/app/onepage/(resume)/skills";
import OnePageSoftSkills from "@/app/onepage/(resume)/softSkills";
import OnePageExperiencesCTA from "@/app/onepage/(experiences)/cta";
import OnePageExperiencesList from "@/app/onepage/(experiences)/list";

export default function OnePage() {
	return (
		<div className="min-h-screen snap-center overflow-x-clip">
			<div className="sticky top-0 inline-block box-border h-screen w-screen shrink-0 snap-start">
				<OnePageHome />
			</div>
			<div className="sticky top-0 h-screen w-screen shrink-0 bg-accent snap-start">
				<OnePageSkills />
			</div>
			<div className="sticky top-0 h-screen w-screen shrink-0 bg-secondary  snap-start">
				<OnePageSoftSkills />
			</div>
			<div className="sticky top-0 h-screen w-screen shrink-0 bg-secondary  snap-start">
				<OnePageExperiencesCTA />
			</div>
			<div className="sticky top-0 h-screen w-screen shrink-0 bg-secondary  snap-start">
				<OnePageExperiencesList />
			</div>
		</div>
	);
}
