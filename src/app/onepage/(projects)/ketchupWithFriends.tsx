import Title from "@/components/ui/title";
import Image from "next/image";
export default function OnePageProjetsKetchupWithFriends() {
	return (
		<div className="min-h-screen w-full p-3 lg:p-12 flex flex-col gap-9 bg-accent snap-center">
			<div className="relative h-full w-full flex-1">
				<Image
					src={"/projects/ketchup.png"}
					alt={"Ketchup with friends add recipe page"}
					className="object-cover rounded-xl "
					fill
				/>
			</div>
			<div className="w-full">
				<Title size="h1" className="text-secondary-foreground">
					Ketchup with friends
				</Title>
				<Title
					size="h3"
					weight="medium"
					className="text-secondary-foreground gap-1"
				>
					A recipe sharing website mostly made for learning purposes but still
					made with quality in mind.
				</Title>
			</div>
		</div>
	);
}
