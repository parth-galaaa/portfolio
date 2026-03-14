"use client";
import React, { useEffect, useRef, useState, ReactNode } from "react";
import Image from "next/image";
import TabButton from "./ui/tab-button";

interface Icon {
	src: string;
	alt: string;
}

const ICONS: Icon[] = [

	// Languages
	{ src: "/images/python.svg", alt: "Python" },
	{ src: "/images/javascript.svg", alt: "JavaScript" },
	{ src: "/images/typescript.svg", alt: "TypeScript" },
	{ src: "/images/sql.svg", alt: "SQL" },
	{ src: "/images/php.svg", alt: "PHP" },
	{ src: "/images/java.svg", alt: "Java" },
	{ src: "/images/html.svg", alt: "HTML5" },

	// Frameworks & Libraries
	{ src: "/images/fastapi.svg", alt: "FastAPI" },
	{ src: "/images/django.svg", alt: "Django" },
	{ src: "/images/nodejs.svg", alt: "Node.js" },
	{ src: "/images/nextjs.svg", alt: "Next.js" },
	{ src: "/images/react.svg", alt: "React.js" },
	{ src: "/images/mapbox.svg", alt: "Mapbox GL JS" },
	{ src: "/images/pandas.svg", alt: "Pandas" },
	{ src: "/images/numpy.svg", alt: "NumPy" },
	{ src: "/images/scikitlearn.svg", alt: "Scikit-Learn" },
	{ src: "/images/tensorflow.svg", alt: "TensorFlow" },
	{ src: "/images/pytorch.svg", alt: "PyTorch" },
	{ src: "/images/opencv.svg", alt: "OpenCV" },

	// Databases
	{ src: "/images/postgresql.svg", alt: "PostgreSQL" },
	{ src: "/images/mysql.svg", alt: "MySQL" },
	{ src: "/images/sqlserver.svg", alt: "MS SQL" },
	{ src: "/images/mongodb.svg", alt: "MongoDB" },

	// Cloud & DevOps
	{ src: "/images/aws.svg", alt: "AWS" },
	{ src: "/images/azure.svg", alt: "Microsoft Azure" },
	{ src: "/images/docker.svg", alt: "Docker" },
	{ src: "/images/git.svg", alt: "Git" },

	// Data & Analytics
	{ src: "/images/powerbi.svg", alt: "Power BI" },
	{ src: "/images/tableau.svg", alt: "Tableau" },
	{ src: "/images/powerautomate.svg", alt: "Power Automate" },
];

interface TabData {
	title: string;
	id: string;
	content: ReactNode | null;
}

const TAB_DATA: TabData[] = [
	{
		title: "Skills",
		id: "skills",
		content: null,
	},
	{
		title: "Education",
		id: "education",
		content: (
			<div className="border border-gray-600/30 rounded-xl p-6 bg-gray-800/20 backdrop-blur-sm">
				<div className="flex flex-wrap items-center">
					<div className="w-full md:w-auto md:grow">
						<h3 className="font-bold text-2xl mb-2 text-white">
							University of Windsor
						</h3>
						<p className="text-lg font-semibold text-gray-200">
							Bachelor of Computer Science Honours (Co-op)
						</p>
						<p className="text-md text-gray-300 mb-1 font-medium">
							Specialization in AI and Minor in Mathematics
						</p>
					</div>
					<div className="text-right">
						<p className="text-md text-gray-400">Sep 2021 - Apr 2025</p>
					</div>
				</div>
			</div>
		),
	},
];

const AboutSection: React.FC = () => {
	const [tab, setTab] = useState<string>("skills");
	const [, setInView] = useState<boolean>(false);
	const [skillsAnimate, setSkillsAnimate] = useState<boolean>(false);
	const [textAnimate, setTextAnimate] = useState<boolean>(false);
	const aboutRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					setSkillsAnimate(true);
					setTextAnimate(true);
				} else {
					setInView(false);
					setSkillsAnimate(false);
					setTextAnimate(false);
				}
			},
			{ threshold: 0.2 }
		);

		const currentRef = aboutRef.current;
		if (currentRef) observer.observe(currentRef);

		return () => {
			if (currentRef) observer.unobserve(currentRef);
			observer.disconnect();
		};
	}, []);

	const handleTabChange = (id: string) => {
		setTab(id);
	};

	return (
		<section
			id="about"
			className="text-white mt-8 sm:mb-16 md:mb-28 lg:mb-32 px-4 sm:px-6 lg:px-8"
			ref={aboutRef}
		>
			<div className="max-w-6xl mx-auto">

				{/* Title */}
				<div className="text-right mb-8">
					<h2
						className={`text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-8 transition-all duration-1000 ${textAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
							}`}
					>
						About Me
					</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

					{/* Left Text */}
					<div className="lg:col-span-7 space-y-6">
						<div
							className={`text-gray-300 leading-relaxed space-y-4 transition-all duration-1000 delay-200 ${textAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
								}`}
						>
							<p className="text-lg">
								Hello! I&apos;m <span className="font-bold text-white">Parth Gala</span>,
								a Full Stack Software Developer and AI enthusiast based in Canada.
							</p>

							<p className="text-lg">
								I recently graduated with an Honours Bachelor of Computer Science
								(Co-op) from the University of Windsor specializing in AI with a
								minor in Mathematics.
							</p>

							<p className="text-lg">
								I enjoy building intelligent software, scalable web apps, and
								AI-driven systems that solve real-world problems.
							</p>
						</div>
					</div>

					{/* Right Side */}
					<div className="lg:col-span-5">

						{/* Tabs */}
						<div
							className={`flex flex-row space-x-4 transition-all duration-1000 delay-400 ${textAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
								}`}
						>
							{TAB_DATA.map((tabItem) => (
								<TabButton
									key={tabItem.id}
									selectTab={() => handleTabChange(tabItem.id)}
									active={tab === tabItem.id}
								>
									{tabItem.title}
								</TabButton>
							))}
						</div>

						{/* Content */}
						<div className="min-h-75 mt-6">
							{tab === "education" ? (
								TAB_DATA.find((t) => t.id === tab)?.content
							) : (
								<div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-5 gap-4">
									{ICONS.map((icon, index) => (
										<div
											key={icon.alt}
											className={`group relative flex items-center justify-center p-3 rounded-xl bg-gray-800/30 border border-gray-600/20 hover:border-blue-400/40 hover:scale-105 transition-all duration-500 ${skillsAnimate
												? "opacity-100 translate-y-0"
												: "opacity-0 translate-y-6"
												}`}
											style={{
												transitionDelay: `${600 + index * 50}ms`,
											}}
										>
											<Image
												src={icon.src}
												alt={icon.alt}
												width={40}
												height={40}
												unoptimized
												className="group-hover:scale-110 transition-transform duration-300"
											/>

											{/* Tooltip */}
											<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition">
												{icon.alt}
											</div>
										</div>
									))}
								</div>
							)}
						</div>

					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;