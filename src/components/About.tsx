"use client";
import React, { useEffect, useRef, useState, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import TabButton from "./ui/tab-button";
import cIcon from "../../public/images/c.svg";
import javaIcon from "../../public/images/java.svg";
import pythonIcon from "../../public/images/python.svg";
import htmlIcon from "../../public/images/html.svg";
import cssIcon from "../../public/images/css.svg";
import javascriptIcon from "../../public/images/javascript.svg";
import phpIcon from "../../public/images/php.svg";
import sqlIcon from "../../public/images/sql.svg";
import reactIcon from "../../public/images/react.svg";
import nodejsIcon from "../../public/images/nodejs.svg";
import nextjsIcon from "../../public/images/nextjs.svg";
import tailwindIcon from "../../public/images/tailwind.svg";
import gitIcon from "../../public/images/git.svg";
import firebaseIcon from "../../public/images/firebase.svg";
import vercelIcon from "../../public/images/vercel.svg";
import mysqlIcon from "../../public/images/mysql.svg";
import postmanIcon from "../../public/images/postman.svg";
import awsIcon from "../../public/images/aws.svg";
import azureIcon from "../../public/images/azure.svg";
import jupyterIcon from "../../public/images/jupyter.svg";
import tableauIcon from "../../public/images/tableau.svg";
import matplotlibIcon from "../../public/images/matplotlib.svg";
import numpyIcon from "../../public/images/numpy.svg";
import pandasIcon from "../../public/images/pandas.svg";
import scikitIcon from "../../public/images/scikitlearn.svg";
import tensorflowIcon from "../../public/images/tensorflow.svg";
import kerasIcon from "../../public/images/keras.svg";
import pytorchIcon from "../../public/images/pytorch.svg";
import powerautomateIcon from "../../public/images/powerautomate.svg";
import powerbiIcon from "../../public/images/powerbi.svg";
import sqlserverIcon from "../../public/images/sqlserver.svg";
import snowflakeIcon from "../../public/images/snowflake.svg";
import seabornIcon from "../../public/images/seaborn.svg";
import dockerIcon from "../../public/images/docker.svg";
import opencvIcon from "../../public/images/opencv.svg";
import postgresqlIcon from "../../public/images/postgresql.svg";
import mongodbIcon from "../../public/images/mongodb.svg";
import angularIcon from "../../public/images/angular.svg";
import djangoIcon from "../../public/images/django.svg";
import vueIcon from "../../public/images/vue.svg";

interface Icon {
	src: StaticImageData;
	alt: string;
}

const ICONS: Icon[] = [
	{ src: cIcon, alt: "C" },
	{ src: javaIcon, alt: "Java" },
	{ src: pythonIcon, alt: "Python" },
	{ src: htmlIcon, alt: "HTML" },
	{ src: cssIcon, alt: "CSS" },
	{ src: javascriptIcon, alt: "JavaScript" },
	{ src: phpIcon, alt: "PHP" },
	{ src: sqlIcon, alt: "SQL" },
	{ src: reactIcon, alt: "React" },
	{ src: nodejsIcon, alt: "Node.js" },
	{ src: nextjsIcon, alt: "Next.js" },
	{ src: tailwindIcon, alt: "Tailwind" },
	{ src: gitIcon, alt: "Git" },
	{ src: firebaseIcon, alt: "Firebase" },
	{ src: vercelIcon, alt: "Vercel" },
	{ src: mysqlIcon, alt: "MySQL" },
	{ src: postmanIcon, alt: "Postman" },
	{ src: awsIcon, alt: "AWS" },
	{ src: azureIcon, alt: "Azure" },
	{ src: jupyterIcon, alt: "Jupyter" },
	{ src: tableauIcon, alt: "Tableau" },
	{ src: matplotlibIcon, alt: "Matplotlib" },
	{ src: numpyIcon, alt: "NumPy" },
	{ src: pandasIcon, alt: "Pandas" },
	{ src: scikitIcon, alt: "Scikit-learn" },
	{ src: tensorflowIcon, alt: "TensorFlow" },
	{ src: kerasIcon, alt: "Keras" },
	{ src: pytorchIcon, alt: "PyTorch" },
	{ src: powerautomateIcon, alt: "Power Automate" },
	{ src: powerbiIcon, alt: "Power BI" },
	{ src: sqlserverIcon, alt: "SQL Server" },
	{ src: snowflakeIcon, alt: "Snowflake" },
	{ src: seabornIcon, alt: "Seaborn" },
	{ src: dockerIcon, alt: "Docker" },
	{ src: opencvIcon, alt: "OpenCV" },
	{ src: postgresqlIcon, alt: "PostgreSQL" },
	{ src: mongodbIcon, alt: "MongoDB" },
	{ src: angularIcon, alt: "Angular" },
	{ src: djangoIcon, alt: "Django" },
	{ src: vueIcon, alt: "Vue.js" },
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
					<div className="w-full md:w-auto md:flex-grow">
						<h3 className="font-bold text-2xl mb-2 text-white">University of Windsor</h3>
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
		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
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
				{/* Section Title */}
				<div className="text-right mb-8">
					<h2 className={`text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-8 transition-all duration-1000 ${textAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
						About Me
					</h2>
				</div>

				{/* Main Content */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

					{/* Description Section */}
					<div className="lg:col-span-7 space-y-6">
						<div className={`prose prose-lg prose-invert max-w-none transition-all duration-1000 delay-200 ${textAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}>
							<div className="text-gray-300 leading-relaxed space-y-4">
								<p className="text-lg">
									Hello! I'm <span className="font-bold text-white relative inline-block">
										<span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent animate-pulse">Parth Gala</span>
										<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-green-400 transform scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></span>
									</span>, a Full Stack Software Developer and AI enthusiast based in Canada. I recently graduated with an <span className="font-semibold text-white relative group cursor-pointer">
										<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Honours Bachelor of Computer Science (Co-op)</span>
										<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
									</span> from the <span className="font-semibold text-white relative group cursor-pointer">
										<span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">University of Windsor</span>
										<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-teal-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
									</span>, specializing in AI with a minor in Mathematics.
								</p>

								<p className="text-lg">
									I'm passionate about building <span className="font-semibold relative group cursor-pointer">
										<span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">intelligent, high-performance software</span>
										<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-300 to-cyan-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
									</span> that solves real-world problems. Over the years, I've developed scalable web applications, designed efficient data pipelines, and implemented AI-powered solutions that optimize workflows and provide actionable insights. During my co-op and internship experiences, my work helped teams <span className="font-semibold relative group cursor-pointer">
										<span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">increase operational efficiency, reduce manual effort, and improve decision-making through data-driven solutions</span>
										<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-300 to-emerald-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
									</span>.
								</p>

								<p className="text-lg">
									Beyond building software, I'm driven by <span className="font-semibold relative group cursor-pointer">
										<span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">curiosity and impact</span>
										<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
									</span>. I enjoy exploring new technologies, solving challenging problems, and experimenting with creative approaches to engineering solutions. I see software development not just as coding, but as crafting systems that empower people, teams, and organizations to achieve more.
								</p>

								<p className="text-lg">
									When I'm not working on projects, you'll find me <span className="font-semibold relative group cursor-pointer">
										<span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">analyzing trends in technology, diving into AI research, or pursuing creative personal projects</span>
										<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-300 to-blue-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
									</span>. Every project I take on is an opportunity to learn, innovate, and make a meaningful impact.
								</p>
							</div>
						</div>
					</div>

					{/* Tabs and Content Section */}
					<div className="lg:col-span-5">
						{/* Tab Buttons */}
						<div className={`flex flex-row justify-start space-x-4 transition-all duration-1000 delay-400 ${textAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}>
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

						{/* Tab Content */}
						<div className="min-h-[300px]">
							{tab === "education" ? (
								<div className={`transition-all duration-1000 delay-600 ${textAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
									}`}>
									{TAB_DATA.find((t) => t.id === tab)?.content}
								</div>
							) : (
								<div className={`transition-all duration-1000 delay-600 ${textAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
									}`}>
									<div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-5 gap-4">
										{ICONS.map((icon, index) => (
											<div
												key={icon.alt}
												className={`group relative flex items-center justify-center p-3 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/20 hover:border-blue-400/40 hover:bg-gray-700/40 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 ${skillsAnimate
													? "opacity-100 translate-y-0"
													: "opacity-0 translate-y-6"
													}`}
												style={{
													transitionDelay: `${600 + index * 50}ms`,
													animationDelay: `${600 + index * 50}ms`
												}}
											>
												<Image
													src={icon.src}
													alt={icon.alt}
													width={40}
													height={40}
													unoptimized
													className="transition-transform duration-300 group-hover:scale-110"
												/>

												{/* Tooltip */}
												<div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 border border-gray-600">
													{icon.alt}
													<div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
												</div>
											</div>
										))}
									</div>
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