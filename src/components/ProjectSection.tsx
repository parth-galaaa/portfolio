"use client";

import React from 'react';
import ProjectCard from './ProjectCard';

interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	gitUrl: string;
}

const projectsData: Project[] = [
	{
		id: 1,
		title: "Text Analyzer",
		description: "AI-powered tool to perform summary, paraphrasing, sentiment analysis and translation",
		image: "/images/text.png",
		gitUrl: "https://github.com/parth-galaaa/text-analyzer",
	},
	{
		id: 2,
		title: "Sentiment-Analysis-on-Amazon-Reviews",
		description: "What emotions do these reviews convey?",
		image: "/images/sentiment.png",
		gitUrl: "https://github.com/parth-galaaa/Sentiment-Analysis-on-Amazon-Reviews",
	},
	{
		id: 3,
		title: "Real-Time Market Data Forecasting",
		description: "Market Data Forecasting using Machine Learning",
		image: "/images/stockprediction.png",
		gitUrl: "https://github.com/parth-galaaa/Machine-Learning-Project",
	},
	{
		id: 4,
		title: "Personal Portfolio Website",
		description: "Welcome to my WEBSITE!",
		image: "/images/portfolio.jpg",
		gitUrl: "https://github.com/parth-galaaa/portfolio",
	},
	{
		id: 5,
		title: "Expense Tracker App",
		description: "Want to keep your expenses in check?",
		image: "/images/expenseTracker1.jpg",
		gitUrl: "https://github.com/parth-galaaa/ExpenseTracker",
	},
	{
		id: 6,
		title: "Ecommerce Website",
		description: "Thinking about elevating your everyday shopping experience?",
		image: "/images/ecommerce.jpg",
		gitUrl: "https://github.com/parth-galaaa/Ecommerce-Website",
	},
	{
		id: 7,
		title: "Four in a Row",
		description: "Let's see who makes a 4 first..",
		image: "/images/fourinarow.webp",
		gitUrl: "https://github.com/parth-galaaa/four-in-a-row",
	},
	{
		id: 8,
		title: "Calculator",
		description: "Trouble with calculations?",
		image: "/images/calculator.jpg",
		gitUrl: "https://github.com/parth-galaaa/simple-calculator",
	},
];

const ProjectSection: React.FC = () => {
	return (
		<section id="project" className="mt-12">
			<h2 className="text-4xl text-right lg:text-6xl font-bold text-white mb-4 md:mb-8">
				Projects
			</h2>
			<ul className="grid md:grid-cols-3 gap-8 md:gap-12 mt-6">
				{projectsData.map((project) => (
					<li key={project.id}>
						<ProjectCard
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
						/>
					</li>
				))}
			</ul>
		</section>
	);
};

export default ProjectSection;
