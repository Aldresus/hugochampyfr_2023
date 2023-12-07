"use client";

import ContactButtons from "@/components/ui/contactButtons";
import Title from "@/components/ui/title";
import { Variants, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const parents: Variants = {
	hidden: { opacity: 0 },
	enter: {
		opacity: 1,
		transition: { staggerChildren: 0.6 },
	},
};

const titleVariants: Variants = {
	hidden: { opacity: 0, x: 0, y: -200, transition: { ease: "easeInOut" } },
	enter: { opacity: 1, x: 0, y: 0 },
};

const skillsVariant: Variants = {
	hidden: { opacity: 0, x: -100 },
	enter: { opacity: 1, x: 0, y: 0 },
};

const experienceVariants: Variants = {
	hidden: { opacity: 0, x: 0, y: 100 },
	enter: { opacity: 1, x: 0, y: 0 },
};

const colorChangeTransitionVariants = {
	initial: {
		top: "100%",
		transition: {
			ease: "anticipate",
			duration: 0.7,
		},
	},
	animate: {
		top: 0,
		transition: {
			ease: "anticipate",
			duration: 0.7,
		},
	},
};

export default function OnePageHome() {
	const [titleRotation, setTitleRotation] = useState(0);
	const [sparkSizePercent, setSparkSizePercent] = useState(100);
	const [colorTransition, setColorTransition] = useState(false);

	useEffect(() => {
		if (titleRotation === 0) return;

		setSparkSizePercent(sparkSizePercent + 1);

		if (Math.round(titleRotation / 360) % 3 === 0) {
			setSparkSizePercent(100);
			if (document) {
				console.log("document");
				const color = `${Math.floor(Math.random() * 360)}, 100%, 50%`;

				document.documentElement.style.setProperty("--accent-temp", color);

				setColorTransition(true);

				setTimeout(() => {
					document.documentElement.style.setProperty(
						"--accent-foreground",
						color,
					);

					document.documentElement.style.setProperty(
						"--accent",
						"222.2 84% 4.9%",
					);

					document.documentElement.style.setProperty(
						"--card",
						"222.2 84% 4.9%",
					);
					document.documentElement.style.setProperty(
						"card-foreground",
						"0 10% 100%",
					);

					document.documentElement.style.setProperty(
						"--background",
						"222.2 84% 4.9%",
					);
					document.documentElement.style.setProperty(
						"--foreground",
						"0 10% 100%",
					);

					document.documentElement.style.setProperty(
						"--primary",
						"210 40% 98%",
					);
					document.documentElement.style.setProperty(
						"--primary-foreground",
						"222.2 47.4% 11.2%",
					);

					document.documentElement.style.setProperty(
						"--secondary",
						"222.2 47.4% 11.2%",
					);
					document.documentElement.style.setProperty(
						"--secondary-foreground",
						"210 40% 96.1%",
					);
					setColorTransition(false);
				}, 1000);

				//generate a random hsl color
			}
		}
	}, [titleRotation]);

	return (
		<motion.main
			className="w-full min-h-full flex flex-col items-start justify-between p-3 lg:p-12 snap-center bg-primary"
			variants={parents}
			initial="hidden"
			animate="enter"
		>
			<motion.div
				className="absolute left-0 bottom-0 right-0 bg-accent-temp z-50"
				variants={colorChangeTransitionVariants}
				initial="initial"
				animate={colorTransition ? "animate" : "initial"}
			/>
			<motion.div
				variants={titleVariants}
				transition={{
					duration: 1,
				}}
				className="flex h-1/3 lg:h-1/2"
			>
				<div className="flex flex-col justify-start items-start gap-2">
					<Title size="main" className="justify-center text-primary-foreground">
						<motion.div
							animate={{
								rotate: titleRotation,
								transition: { ease: "easeInOut", bounce: 0.5, duration: 0.5 },
							}}
						>
							<div>Hi,</div>
							<div className="flex">
								{" "}
								I&apos;m Hugo
								<motion.div
									animate={{
										scale: sparkSizePercent / 100,
										transition: { duration: 1 },
									}}
									className="text-accent-foreground cursor-pointer"
								>
									<Sparkles
										onClick={() => setTitleRotation(titleRotation + 360)}
										className="hidden 2xl:block"
										size="7.5rem"
									/>
									<Sparkles
										onClick={() => setTitleRotation(titleRotation + 360)}
										className="hidden lg:block 2xl:hidden"
										size="5.5rem"
									/>
									<Sparkles
										onClick={() => setTitleRotation(titleRotation + 360)}
										className="hidden md:block lg:hidden"
										size="4.5rem"
									/>
									<Sparkles
										onClick={() => setTitleRotation(titleRotation + 360)}
										className="hidden sm:block md:hidden"
										size="3.5rem"
									/>
									<Sparkles
										onClick={() => setTitleRotation(titleRotation + 360)}
										className="text-accent-foreground cursor-pointer  sm:hidden"
										size="2.5rem"
									/>
								</motion.div>
							</div>
						</motion.div>
					</Title>
				</div>
			</motion.div>
			<div className="flex w-full h-2/3 lg:h-1/2 items-end justify-between">
				<motion.div variants={skillsVariant}>
					<Title size="h1" className="text-primary-foreground">
						Full stack developer,
					</Title>
					<Title size="h1" className="text-primary-foreground">
						Student
					</Title>
				</motion.div>
				<motion.div className="flex items-end" variants={experienceVariants}>
					<ContactButtons />
				</motion.div>
			</div>

			{/*<div className="flex h-2/3 lg:h-1/2 gap-3 lg:gap-9 w-full flex-col lg:flex-row">*/}
			{/*  <Link href={"/resume/skills"} className="flex flex-1">*/}
			{/*    <motion.div className="w-full flex" variants={skillsVariant}>*/}
			{/*      <ButtonTextBackground*/}
			{/*        className="shadow overflow-hidden"*/}
			{/*        size="fill"*/}
			{/*        rounded="3xl"*/}
			{/*      >*/}
			{/*        Skills*/}
			{/*      </ButtonTextBackground>*/}
			{/*    </motion.div>*/}
			{/*  </Link>*/}

			{/*  <Link href={"/resume/experiences"} className="flex flex-1">*/}
			{/*    <motion.div className="w-full flex" variants={experienceVariants}>*/}
			{/*      <ButtonTextBackground*/}
			{/*        className="shadow overflow-hidden"*/}
			{/*        size="fill"*/}
			{/*        rounded="3xl"*/}
			{/*      >*/}
			{/*        Experiences*/}
			{/*      </ButtonTextBackground>*/}
			{/*    </motion.div>*/}
			{/*  </Link>*/}

			{/*  <Link href={"/resume/projects"} className="flex flex-1">*/}
			{/*    <motion.div className="w-full flex" variants={projectsVariants}>*/}
			{/*      <ButtonTextBackground*/}
			{/*        className="shadow overflow-hidden"*/}
			{/*        size="fill"*/}
			{/*        rounded="3xl"*/}
			{/*      >*/}
			{/*        Projects*/}
			{/*      </ButtonTextBackground>*/}
			{/*    </motion.div>*/}
			{/*  </Link>*/}
			{/*</div>*/}
		</motion.main>
	);
}
