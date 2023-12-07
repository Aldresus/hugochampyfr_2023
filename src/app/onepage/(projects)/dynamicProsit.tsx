import Title from "@/components/ui/title";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
export default function OnePageProjetsDynamicPrositX() {
	return (
		<div className="min-h-screen w-full p-3 lg:p-12 flex flex-col gap-9 snap-center bg-accent">
			<div className="relative h-full w-full flex-1">
				<Link
					href={"https://prosit.hugochampy.fr"}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src={"/projects/dynamicPrositX.png"}
						alt={"DynamicPrositX landing page screenshot"}
						className="object-cover object-top rounded-xl"
						fill
					/>
				</Link>
			</div>

			<div className="w-full">
				<Title size="h1" className="text-secondary-foreground">
					DynamicPrositX
				</Title>
				<Title size="h3" className="text-secondary-foreground gap-1">
					Tool to help CESI students with their{" "}
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger className="text-accent-foreground cursor-help">
								prosits
							</TooltipTrigger>
							<TooltipContent>
								<Title
									size="h4"
									weight="medium"
									className="text-primary-foreground w-[30rem] p-3"
								>
									<div>
										Prosit, central to CESI pedagogy, involves students solving
										a problematic situation. It consists of three stages:
									</div>
									<div className="pl-6">
										<ul className="list-disc">
											<li>
												the kick-off, where students collaborate to understand
												and define the problem
											</li>
											<li>
												autonomous work, where they work individually or in
												groups to find a solution
											</li>
											<li>and the outcome, where they compile their work.</li>
										</ul>
									</div>
								</Title>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					by providing a structured and easy to use form interface and
					presentation vue.
				</Title>
			</div>
		</div>
	);
}
