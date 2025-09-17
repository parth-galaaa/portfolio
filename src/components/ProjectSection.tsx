"use client";
import React, { useState, useEffect } from "react";
import { Github, Filter } from "lucide-react";

// Project type
interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	gitUrl: string;
	category: string;
	technologies: string[];
	year: string;
}

// Props for FilterButton
interface FilterButtonProps {
	category: string;
	isActive: boolean;
	onClick: (category: string) => void;
	count: number;
}

// Props for ProjectCard
interface ProjectCardProps {
	project: Project;
	index: number;
}

// Static Data
const projectsData: Project[] = [
	{
		id: 1,
		title: "Text Analyzer",
		description:
			"AI-powered tool to perform summary, paraphrasing, sentiment analysis and translation with advanced natural language processing capabilities.",
		image: "/images/text.png",
		gitUrl: "https://github.com/parth-galaaa/text-analyzer",
		category: "AI/ML",
		technologies: ["Python (Flask)", "TypeScript", "JavaScript", "NLP", "ML", "DL"],
		year: "2025",
	},
	{
		id: 2,
		title: "Sentiment Analysis",
		description:
			"Deep learning model for analyzing emotions and sentiments in Amazon product reviews using advanced machine learning techniques.",
		image: "/images/sentiment.png",
		gitUrl: "https://github.com/parth-galaaa/Sentiment-Analysis-on-Amazon-Reviews",
		category: "AI/ML",
		technologies: ["Python", "Matplotlib", "Pandas", "NumPy", "Scikit-learn"],
		year: "2025",
	},
	{
		id: 3,
		title: "Market Forecasting",
		description:
			"Real-time stock market prediction system using machine learning algorithms and financial data analysis.",
		image: "/images/stockprediction.png",
		gitUrl: "https://github.com/parth-galaaa/Machine-Learning-Project",
		category: "AI/ML",
		technologies: ["Python", "Matplotlib", "Pandas", "NumPy", "Scikit-learn"],
		year: "2024",
	},
	{
		id: 4,
		title: "Portfolio Website",
		description:
			"Modern, responsive portfolio website built with Next.js featuring smooth animations and optimal performance.",
		image: "/images/portfolio.jpg",
		gitUrl: "https://github.com/parth-galaaa/portfolio",
		category: "Web",
		technologies: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Vercel"],
		year: "2024",
	},
	{
		id: 5,
		title: "Expense Tracker",
		description:
			"Full-stack expense management application with real-time data visualization and budget tracking features.",
		image: "/images/expenseTracker1.jpg",
		gitUrl: "https://github.com/parth-galaaa/ExpenseTracker",
		category: "Web",
		technologies: ["Java", "Firebase", "Andoid Studio"],
		year: "2024",
	},
	{
		id: 6,
		title: "E-commerce Website",
		description:
			"Complete e-commerce solution with payment integration, inventory management, and modern UI/UX design.",
		image: "/images/ecommerce.jpg",
		gitUrl: "https://github.com/parth-galaaa/Ecommerce-Website",
		category: "Web",
		technologies: ["PHP", "HTML5", "CSS", "MySQL"],
		year: "2023",
	},
	{
		id: 7,
		title: "Four in a Row",
		description:
			"Interactive game implementation with intelligent AI opponent and smooth gameplay mechanics.",
		image: "/images/fourinarow.webp",
		gitUrl: "https://github.com/parth-galaaa/four-in-a-row",
		category: "Game",
		technologies: ["C"],
		year: "2022",
	},
	{
		id: 8,
		title: "Calculator App",
		description:
			"Clean, modern calculator with advanced mathematical operations and responsive design.",
		image: "/images/calculator.jpg",
		gitUrl: "https://github.com/parth-galaaa/simple-calculator",
		category: "Utility",
		technologies: ["C"],
		year: "2021",
	},
];

// Filter Button
const FilterButton: React.FC<FilterButtonProps> = ({
	category,
	isActive,
	onClick,
	count,
}) => (
	<button
		onClick={() => onClick(category)}
		className={`group relative px-6 py-3 font-medium text-sm transition-all duration-300 ${isActive ? "text-black" : "text-gray-400 hover:text-gray-700"
			}`}
	>
		<span className="relative z-10">{category}</span>
		<span className="ml-2 text-xs opacity-60">({count})</span>
		{isActive && (
			<div className="absolute inset-0 bg-white rounded-full transform scale-105" />
		)}
		{!isActive && (
			<div className="absolute inset-0 bg-gray-100 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
		)}
	</button>
);

// Project Card
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="group relative h-full"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{
				animationDelay: `${index * 0.1}s`,
			}}
		>
			<div className="relative bg-gray-800 border border-gray-700/50 transition-all duration-500 hover:border-gray-400 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
				{/* Image */}
				<div className="relative h-64 overflow-hidden">
					<img
						src={project.image}
						alt={project.title}
						className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
					/>

					{/* Overlay */}
					<div
						className={`absolute inset-0 bg-black transition-opacity duration-300 ${isHovered ? "opacity-20" : "opacity-0"
							}`}
					/>

					{/* GitHub */}
					<div
						className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${isHovered
							? "opacity-100 translate-x-0"
							: "opacity-0 translate-x-4"
							}`}
					>
						<a
							href={project.gitUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 bg-white/90 backdrop-blur-sm hover:bg-white transition-colors rounded-full"
							onClick={(e) => e.stopPropagation()}
						>
							<Github className="w-4 h-4 text-black" />
						</a>
					</div>

					{/* Year */}
					<div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-xs font-mono tracking-wider">
						{project.year}
					</div>

					{/* Category */}
					<div className="absolute bottom-4 left-4">
						<span className="bg-white text-black px-3 py-1 text-xs font-medium tracking-wide uppercase">
							{project.category}
						</span>
					</div>
				</div>

				{/* Content */}
				<div className="p-6 flex-grow flex flex-col">
					<h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
						{project.title}
					</h3>

					<p className="text-gray-300 leading-relaxed mb-6 text-sm flex-grow">
						{project.description}
					</p>

					{/* Tech */}
					<div className="h-16 flex flex-wrap gap-2 content-start mt-auto">
						{project.technologies.map((tech, i) => (
							<span
								key={i}
								className="px-3 py-1 bg-gray-700 text-gray-200 text-xs font-medium border border-gray-700/50 hover:border-gray-400 transition-colors h-fit"
							>
								{tech}
							</span>
						))}
					</div>
				</div>

				{/* Hover Line */}
				<div
					className={`absolute left-0 top-0 w-1 bg-white transition-all duration-500 ${isHovered ? "h-full" : "h-0"
						}`}
				/>
			</div>
		</div>
	);
};

// Project Section
const ProjectSection: React.FC = () => {
	const [activeFilter, setActiveFilter] = useState<string>("All");
	const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [showFilters, setShowFilters] = useState<boolean>(false);

	const categories: string[] = ["All", "AI/ML", "Web", "Game", "Utility"];

	const getProjectCount = (category: string): number => {
		if (category === "All") return projectsData.length;
		return projectsData.filter((project) => project.category === category).length;
	};

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	useEffect(() => {
		if (activeFilter === "All") {
			setFilteredProjects(projectsData);
		} else {
			setFilteredProjects(
				projectsData.filter((project) => project.category === activeFilter)
			);
		}
	}, [activeFilter]);

	return (
		<section id="project" className="mt-12 px-4 max-w-7xl mx-auto">
			<h2 className="text-4xl text-right lg:text-6xl font-bold text-white mb-4 md:mb-8">
				Projects
			</h2>

			{/* Filters */}
			<div
				className={`mb-8 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}
			>
				<div className="flex items-center gap-4 flex-wrap">
					<button
						onClick={() => setShowFilters(!showFilters)}
						className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
					>
						<Filter className="w-5 h-5" />
						<span className="text-sm font-medium">Filter</span>
					</button>

					{showFilters && (
						<div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-left-4 duration-300">
							{categories.map((category) => (
								<FilterButton
									key={category}
									category={category}
									isActive={activeFilter === category}
									onClick={setActiveFilter}
									count={getProjectCount(category)}
								/>
							))}
						</div>
					)}
				</div>
			</div>

			{/* Projects Grid */}
			<div
				className={`transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"
					}`}
			>
				<ul className="grid md:grid-cols-3 gap-8 md:gap-12 mt-6">
					{filteredProjects.map((project, index) => (
						<li key={project.id} className="h-full">
							<ProjectCard project={project} index={index} />
						</li>
					))}
				</ul>
			</div>

			{/* Stats */}
			<div
				className={`mt-24 pt-12 border-t border-gray-600 transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}
			>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{[
						{
							label: "Projects Completed",
							value: projectsData.length.toString().padStart(2, "0"),
						},
						{ label: "Technologies Used", value: "16+" },
						{ label: "Years of Experience", value: "03" },
						{ label: "Categories Covered", value: "04" },
					].map((stat, index) => (
						<div key={index} className="text-center">
							<div className="text-4xl font-bold text-white mb-2 font-mono">
								{stat.value}
							</div>
							<div className="text-sm text-gray-400 uppercase tracking-wide">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectSection;
