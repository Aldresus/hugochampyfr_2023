import OnePageHome from "@/app/onepage/(homepage)/homepage";
import OnePageSkills from "@/app/onepage/(resume)/skills";
import OnePageSoftSkills from "@/app/onepage/(resume)/softSkills";
import OnePageExperiencesCTA from "@/app/onepage/(experiences)/cta";
import OnePageExperiencesList from "@/app/onepage/(experiences)/list";
import OnePageExperiencesEducation from "@/app/onepage/(experiences)/education";
import OnePageProjetsCTA from "@/app/onepage/(projects)/cta";
import OnePageProjetsDynamicPrositX from "@/app/onepage/(projects)/dynamicProsit";
import OnePageProjetsKetchupWithFriends from "@/app/onepage/(projects)/ketchupWithFriends";
import OnePageProjetsTechnos from "@/app/onepage/(projects)/technosHugoChampyFr";

export default function OnePage() {
	return (
		<div className="min-h-screen snap-center overflow-x-clip snap-always">
			<div className="sticky top-0 inline-block box-border h-screen w-screen shrink-0  ">
				<OnePageHome />
			</div>
			<div className="sticky top-0 h-screen w-screen shrink-0">
				<OnePageSkills />
			</div>
			<div className="sticky top-0 h-screen w-screen shrink-0">
				<OnePageSoftSkills />
			</div>
			<div className="sticky top-0 h-screen w-screen shrink-0">
				<OnePageExperiencesEducation />
			</div>
			<div className="sticky top-0 h-screen w-screen shrink-0">
				<OnePageExperiencesCTA />
			</div>
			<div className="sticky top-0 h-screen w-screen shrink-0">
				<OnePageExperiencesList />
			</div>
			<div className="sticky top-0 h-screen w-screen shrink-0">
				<OnePageProjetsCTA />
			</div>
			<div className="sticky top-0 h-screen w-screen shrink-0">
				<OnePageProjetsDynamicPrositX />
			</div>
			<div className="sticky top-0 h-screen w-screen shrink-0">
				<OnePageProjetsKetchupWithFriends />
			</div>
			<div className="sticky top-0 h-screen w-screen shrink-0">
				<OnePageProjetsTechnos />
			</div>
		</div>
	);
}
