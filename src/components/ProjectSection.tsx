"use client";
import React, { useState, useEffect } from "react";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";

// Project type
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  gitUrl: string;
  category: string;
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
    title: "Spottigo",
    description:
      "Discover local events you’ll love and plan with friends instantly through intelligent recommendations and group scheduling.",
    image: "/images/projects/spottigo.png",
    gitUrl: "https://github.com/parth-galaaa/spottigo",
    category: "In Progress",
  },
  {
    id: 2,
    title: "Text Analyzer",
    description:
      "AI-powered tool to perform summary, paraphrasing, sentiment analysis and translation with advanced natural language processing capabilities.",
    image: "/images/projects/text.png",
    gitUrl: "https://github.com/parth-galaaa/text-analyzer",
    category: "AI",
  },
  {
    id: 3,
    title: "Market Forecasting",
    description:
      "Real-time stock market prediction system using machine learning algorithms and financial data analysis.",
    image: "/images/projects/stock-prediction.png",
    gitUrl: "https://github.com/parth-galaaa/Machine-Learning-Project",
    category: "AI",
  },
  {
    id: 4,
    title: "Sentiment Analysis",
    description:
      "Deep learning model for analyzing emotions and sentiments in Amazon product reviews using advanced machine learning techniques.",
    image: "/images/projects/sentiment.png",
    gitUrl:
      "https://github.com/parth-galaaa/Sentiment-Analysis-on-Amazon-Reviews",
    category: "AI",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website built with Next.js featuring smooth animations and optimal performance.",
    image: "/images/projects/portfolio.jpg",
    gitUrl: "https://github.com/parth-galaaa/portfolio",
    category: "Web",
  },
  {
    id: 6,
    title: "Expense Tracker",
    description:
      "Full-stack expense management application with real-time data visualization and budget tracking features.",
    image: "/images/projects/expense-tracker.jpg",
    gitUrl: "https://github.com/parth-galaaa/ExpenseTracker",
    category: "Web",
  },
  {
    id: 7,
    title: "E-commerce Website",
    description:
      "Complete e-commerce solution with payment integration, inventory management, and modern UI/UX design.",
    image: "/images/projects/ecommerce.jpg",
    gitUrl: "https://github.com/parth-galaaa/Ecommerce-Website",
    category: "Mobile",
  },
  {
    id: 8,
    title: "CheckIt",
    description:
      "Stay organized, track your todos, and manage your tasks with real-time synchronization across all your devices.",
    image: "/images/projects/checkit.jpg",
    gitUrl: "https://github.com/parth-galaaa/checkIt",
    category: "WEB",
  },
  {
    id: 9,
    title: "Four in a Row",
    description:
      "Interactive game implementation with intelligent AI opponent and smooth gameplay mechanics.",
    image: "/images/projects/four-in-a-row.webp",
    gitUrl: "https://github.com/parth-galaaa/four-in-a-row",
    category: "Game",
  },
];

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
      <div className="relative bg-gray-800/30 border border-gray-700/50 transition-all duration-500 hover:border-gray-400 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isHovered ? "opacity-20" : "opacity-0"
            }`}
          />

          {/* GitHub */}
          <div
            className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
              isHovered
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
              <IconBrandGithub className="w-4 h-4 text-black" />
            </a>
          </div>

          {/* Category */}
          <div className="absolute bottom-4 left-4">
            <span className="bg-white text-black px-3 py-1 text-xs font-medium tracking-wide uppercase">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 grow flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6 text-sm grow">
            {project.description}
          </p>
        </div>

        {/* Hover Line */}
        <div
          className={`absolute left-0 top-0 w-1 bg-white transition-all duration-500 ${
            isHovered ? "h-full" : "h-0"
          }`}
        />
      </div>
    </div>
  );
};

// Project Section
const ProjectSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Trigger the fade-in after the first paint.
  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="project" className="mt-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl text-right lg:text-6xl font-bold text-white mb-4 md:mb-8">
        Projects
      </h2>

      {/* Projects Grid */}
      <div
        className={`transition-all duration-1000 delay-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul className="grid md:grid-cols-3 gap-8 md:gap-12 mt-6">
          {projectsData.map((project, index) => (
            <li key={project.id} className="h-full">
              <ProjectCard project={project} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;
