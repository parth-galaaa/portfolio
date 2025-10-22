"use client";
import * as React from 'react';
import { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useMediaQuery, useTheme } from '@mui/material';

interface WorkExperience {
	id: number;
	companyName: string;
	position: string;
	location: string;
	duties: string[];
	duration: string;
}

const workExperiences: WorkExperience[] = [
	{
		id: 1,
		companyName: "Ground Effects Ltd",
		position: "Full Stack Software Developer Co-op",
		location: "Windsor, ON",
		duties: [
			"Developed and optimized full-stack web applications by designing front-ends with TypeScript, JavaScript and Next.js, and building back-end services using Node.js alongside PHP server-side architectures",
			"Designed and monitored data pipelines supporting 3+ teams using SQL Server, leveraging complex SQL queries and stored procedures to ensure efficient ETL and report generation with SSRS",
			"Deployed and documented high-performance, scalable RESTful APIs, achieving 99.9% system uptime and supporting 300+ daily internal users",
			"Automated 5+ operational workflows using Power Automate, Azure and AWS cloud services, eliminating over 20 hours of manual effort per week",
			"Centralized distinct team data into Power BI and Tableau dashboards, providing useful insights that increased overall project throughput by 45%"
		],
		duration: "Sept 2023 - Aug 2024",
	},
	{
		id: 2,
		companyName: "Malad Gas Service, BPCL",
		position: "Software Developer Intern",
		location: "Mumbai, India",
		duties: [
			"Deployed a scalable JavaScript, Next.js and Node.js service management portal to digitize gas delivery scheduling and tracking for 150+ daily gas delivery routes",
			"Modeled and forecasted service demands using Machine Learning on customer data, which enabled targeted strategies and improved sales and customer service efficiency by over 30%",
			"Implemented a Flask-based REST API to centralize customer requests and automate service bookings, reducing manual errors by 30%",
			"Performed exploratory data analysis (EDA) on over 500,000 records from disparate sources, uncovering consumption trends and reducing data preprocessing time by 45% using Python scripts",
			"Engineered a data synchronization pipeline to integrate PostgreSQL data into a unified dashboard, eliminating inconsistencies and improving data transparency by 50%",
			"Implemented interactive dashboards in Tableau and Power BI and documented data workflows to monitor key metrics, reducing data errors by 25% through timely anomaly detection and alerts"
		],
		duration: "May 2022 - Aug 2023",
	},
	{
		id: 3,
		companyName: "University of Windsor",
		position: "Teaching Assistant",
		location: "Windsor, ON",
		duties: [
			"Facilitated technical labs for 40+ students in Computer Science, clarifying complex concepts and providing personalized code feedback",
			"Coordinated the grading of 25+ students’ technical work, including challenging programming assignments and examinations"
		],
		duration: "Jan 2023 - Apr 2025",
	}
];

interface ExpandedState {
	[key: number]: boolean;
}

const ExperienceSection = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const [expandedItems, setExpandedItems] = useState<ExpandedState>({});

	const toggleExpanded = (id: number): void => {
		setExpandedItems(prev => ({
			...prev,
			[id]: !prev[id]
		}));
	};

	// Mobile layout - single column with timeline on the left
	if (isMobile) {
		return (
			<section id="experiences" className="text-white mt-2 sm:mb-16 md:mb-28 lg:mb-32">
				<h2 className="text-4xl lg:text-6xl font-bold text-white text-left mb-8 mt-12">
					Work Experience
				</h2>
				<div className="px-2">
					<Timeline
						position="right"
						sx={{
							padding: 0,
							margin: 0,
							[`& .${timelineItemClasses.root}:before`]: {
								flex: 0,
								padding: 0,
							},
							'& .MuiTimelineItem-root': {
								minHeight: 'auto',
							},
							'& .MuiTimelineContent-root': {
								paddingLeft: '16px',
								paddingRight: '0px',
							}
						}}
					>
						{workExperiences.map((exp: WorkExperience, index: number) => (
							<TimelineItem key={exp.id} sx={{ mb: 3 }}>
								<TimelineSeparator>
									{index !== 0 && <TimelineConnector className="bg-gray-600" />}
									<TimelineDot
										className={`bg-blue-600 transition-all duration-300 ${expandedItems[exp.id]
											? 'scale-110 shadow-lg shadow-blue-500/40'
											: 'hover:scale-105 hover:shadow-md hover:shadow-blue-500/30'
											}`}
										sx={{
											width: { xs: 36, sm: 48 },
											height: { xs: 36, sm: 48 },
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center'
										}}
									>
										<WorkIcon
											className="text-white"
											sx={{
												fontSize: { xs: '1rem', sm: '1.25rem' }
											}}
										/>
									</TimelineDot>
									{index !== workExperiences.length - 1 && <TimelineConnector className="bg-gray-600" />}
								</TimelineSeparator>

								<TimelineContent sx={{ py: 0, px: 0 }}>
									<div className="ml-4">
										{/* Duration at the top for mobile */}
										<div className="flex items-center mb-3">
											<div className="bg-blue-600/20 text-blue-300 text-xs font-semibold px-2 py-1 rounded-full border border-blue-500/30">
												{exp.duration}
											</div>
										</div>

										<div
											onClick={() => toggleExpanded(exp.id)}
											className="cursor-pointer rounded-lg p-4 transition-all duration-300 
											bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 
											hover:bg-gray-700/80 hover:border-blue-500/40 hover:shadow-lg 
											hover:shadow-blue-500/20 active:scale-[0.98] w-full"
										>
											<div className="flex items-start justify-between gap-3">
												<div className="flex-1 min-w-0">
													<Typography
														variant="h6"
														className="text-white leading-tight hover:text-blue-300 
														transition-colors duration-300 mb-2"
														sx={{
															fontSize: '1.125rem',
															fontWeight: 700
														}}
													>
														{exp.position}
													</Typography>
													<div className="flex flex-col gap-1 text-gray-300">
														<span
															className="text-sm"
															style={{ fontWeight: 600 }}
														>
															{exp.companyName}
														</span>
														<span className="text-gray-400 text-xs">{exp.location}</span>
													</div>
												</div>
												<div className="flex-shrink-0">
													<ExpandMoreIcon
														className={`text-gray-400 hover:text-blue-400 transition-all duration-300 
														${expandedItems[exp.id] ? 'rotate-180' : 'rotate-0'}`}
														sx={{ fontSize: '1.25rem' }}
													/>
												</div>
											</div>

											{/* Compact collapsible duties for mobile */}
											<div className={`transition-all duration-500 ease-in-out ${expandedItems[exp.id]
												? 'max-h-[400px] opacity-100 mt-4'
												: 'max-h-0 opacity-0 mt-0'
												} overflow-hidden`}>
												<div className="pt-3 border-t border-gray-600/40">
													<div className="space-y-2 max-h-[350px] overflow-y-auto pr-2">
														{exp.duties.map((duty: string, i: number) => (
															<div
																key={i}
																className={`transition-all duration-400 ${expandedItems[exp.id]
																	? 'translate-y-0 opacity-100'
																	: 'translate-y-2 opacity-0'
																	}`}
																style={{
																	transitionDelay: expandedItems[exp.id] ? `${i * 100}ms` : '0ms'
																}}
															>
																<div className="flex items-start gap-2">
																	<div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
																	<Typography
																		component="p"
																		className="text-gray-200 text-xs leading-relaxed flex-1"
																	>
																		{duty}
																	</Typography>
																</div>
															</div>
														))}
													</div>
												</div>
											</div>
										</div>
									</div>
								</TimelineContent>
							</TimelineItem>
						))}
					</Timeline>
				</div>
			</section >
		);
	}

	// Desktop layout - alternating sides (original layout)
	return (
		<section id="experiences" className="text-white mt-2 sm:mb-16 md:mb-28 lg:mb-32">
			<h2 className="text-4xl lg:text-6xl font-bold text-white text-left mb-8 mt-12">
				Work Experience
			</h2>
			<Timeline
				position="alternate"
				sx={{
					[`& .${timelineItemClasses.root}:before`]: {
						flex: 0,
						padding: 0,
					},
				}}
			>
				{workExperiences.map((exp: WorkExperience, index: number) => (
					<TimelineItem key={exp.id}>
						{/* Duration on the opposite side */}
						<TimelineOppositeContent
							sx={{ m: 'auto 0' }}
							align={index % 2 === 0 ? "right" : "left"}
							className="text-gray-400"
						>
							<Typography className="text-gray-400 hover:text-blue-400 transition-colors duration-300 
							text-sm tracking-wide"
								sx={{ fontWeight: 600 }}>
								{exp.duration}
							</Typography>
						</TimelineOppositeContent>

						{/* Timeline dot + connectors */}
						<TimelineSeparator>
							{index !== 0 && <TimelineConnector className="bg-gray-600" />}
							<TimelineDot
								className={`bg-blue-600 transition-all duration-300 ${expandedItems[exp.id]
									? 'scale-110 shadow-lg shadow-blue-500/40'
									: 'hover:scale-105 hover:shadow-md hover:shadow-blue-500/30'
									}`}
							>
								<WorkIcon className="text-white" />
							</TimelineDot>
							{index !== workExperiences.length - 1 && <TimelineConnector className="bg-gray-600" />}
						</TimelineSeparator>

						{/* Main content */}
						<TimelineContent sx={{ py: 2 }}>
							<div
								onClick={() => toggleExpanded(exp.id)}
								className="cursor-pointer rounded-xl p-6 transition-all duration-300 
								bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 
								hover:bg-gray-700/60 hover:border-blue-500/30 hover:shadow-lg 
								hover:shadow-blue-500/10 hover:-translate-y-1"
							>
								<div className="flex items-center justify-between">
									<div className="flex-1">
										<Typography
											variant="h5"
											className="text-white hover:text-blue-300 
											transition-colors duration-300"
											sx={{
												fontSize: '1.375rem',
												fontWeight: 700
											}}
										>
											{exp.position}
										</Typography>
										<Typography
											className="text-gray-300 mb-2"
											sx={{
												fontSize: '1rem',
												fontWeight: 600
											}}
										>
											{exp.companyName} • {exp.location}
										</Typography>
									</div>
									<ExpandMoreIcon
										className={`text-gray-400 hover:text-blue-400 transition-all duration-300 ml-4 
										${expandedItems[exp.id] ? 'rotate-180' : 'rotate-0'}`}
									/>
								</div>

								{/* Collapsible duties with staggered animations - FIXED HEIGHT CONSTRAINT */}
								<div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedItems[exp.id] ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
									}`}>
									<div className="pl-4 border-l-3 border-blue-500">
										<ul className="list-none space-y-3 p-0">
											{exp.duties.map((duty: string, i: number) => (
												<li
													key={i}
													className={`text-white text-justify transition-all duration-400 
													${expandedItems[exp.id]
															? 'translate-x-0 opacity-100'
															: '-translate-x-4 opacity-0'
														}`}
													style={{
														transitionDelay: expandedItems[exp.id] ? `${i * 100}ms` : '0ms'
													}}
												>
													<Typography
														component="div"
														className="text-white text-justify pl-5 relative leading-relaxed
														before:content-['•'] before:absolute before:left-0 
														before:text-blue-400 before:font-bold before:text-lg"
													>
														{duty}
													</Typography>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</section>
	);
}
export default ExperienceSection;