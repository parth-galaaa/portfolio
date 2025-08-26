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
import TableauIcon from "../../public/images/tableau.svg";
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
	{ src: TableauIcon, alt: "Tableau" },
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
			<div className="border border-gray-300 rounded-md p-4">
				<div className="flex flex-wrap items-center">
					<div className="w-full md:w-auto md:flex-grow">
						<h3 className="font-bold text-2xl mb-2">University of Windsor</h3>
						<p className="text-lg font-semibold">
							Bachelor of Computer Science Honours (Co-op)
						</p>
						<p className="text-md text-gray-300 mb-1 font-medium">
							Specialization in AI and Minor in Mathematics
						</p>
					</div>
					<div className="text-right">
						<p className="text-md">Sep 2021 - Apr 2025</p>
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
	const aboutRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					setSkillsAnimate(true);
				} else {
					setInView(false);
					setSkillsAnimate(false);
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
			className="text-white mt-2 sm:mb-16 md:mb-28 lg:mb-32"
			ref={aboutRef}
		>
			<div className="text-right">
				<h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-8">
					About Me
				</h2>
				<p className="text-left text-lg mb-6">
					Hey there, I&apos;m passionate about turning lines of code into
					meaningful solutions. From late-night debugging sessions to the thrill
					of seeing my projects come to life, I&apos;m all about the journey.
				</p>
				<div className="flex flex-row justify-start space-x-4 mb-8">
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

				<div className="text-left mt-8 min-h-[250px]">
					{tab === "education"
						? TAB_DATA.find((t) => t.id === tab)?.content
						: (
							<div className="flex flex-wrap gap-4 items-center">
								{ICONS.map((icon, index) => (
									<div
										key={icon.alt}
										className={`transition-opacity transform duration-700 ease-in-out
                      ${skillsAnimate
												? "opacity-100 translate-y-0"
												: "opacity-0 translate-y-6"
											}`}
										style={{ transitionDelay: `${index * 60}ms` }}
									>
										<Image
											src={icon.src}
											alt={icon.alt}
											width={60}
											height={60}
											unoptimized
										/>
									</div>
								))}
							</div>
						)}
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
