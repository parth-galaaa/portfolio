import React from 'react';

const ExperienceSection = () => {
	const workExperiences = [
		{
			id: 1,
			companyName: "Ground Effects Ltd",
			position: "Full Stack Software Developer Co-op",
			location: "Windsor, ON",
			duties: [
				"Developed and optimized web applications using TypeScript and JavaScript with Node.js backends, as well as applications with PHP-based server-side architectures",
				"Developed and maintained data pipelines supporting 3+ cross-functional teams, by leveraging complex SQL queries and stored procedures for efficient data extraction and transformation",
				"Implemented high-performance, scalable RESTful APIs that enhanced system performance and decreased response times by 25%",
				"Automated workflows using Azure and AWS cloud solutions to perform routine tasks, reducing manual effort by almost 80%"
			],
			duration: "Sept 2023 - Aug 2024",
		},
		{
			id: 2,
			companyName: "Malad Gas Service, BPCL",
			position: "Data Science Intern",
			location: "Mumbai, Maharashtra, India",
			duties: [
				"Applied machine learning techniques to analyze customer data and forecast service demands, enabling the team to implement targeted strategies that improved sales and customer service efficiency by over 30%",
				"Performed exploratory data analysis (EDA) on over 500,000 records from disparate sources, uncovering consumption trends and reducing data preprocessing time by 45% through automated cleaning scripts",
				"Developed interactive dashboards in Tableau and documented data workflows to monitor key metrics, reducing data errors by 25% through timely anomaly detection and alerts"
			],
			duration: "May 2022 - Aug 2023",
		},
		{
			id: 3,
			companyName: "University of Windsor",
			position: "Teaching Assistant",
			location: "Windsor, ON",
			duties: [
				"Planned and facilitated labs for 30+ students for courses in Computer Science and provided personalized feedback",
				"Liaised with professor regarding development opportunities, challenges and assisting with lectures for students",
				"Coordinated with grading and assessment of 25+ student work, including assignments, quizzes, and tests"
			],
			duration: "Jan 2023 - Apr 2025",
		}
	];

	return (
		<section id="experiences" className="text-white mt-2 sm:mb-16 md:mb-28 lg:mb-32">
			<h2 className="text-4xl lg:text-6xl font-bold text-white text-left mb-8 mt-12">
				Work Experience
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-4">
				{workExperiences.map((experience) => (
					<div
						key={experience.id}
						className="rounded-lg overflow-hidden shadow-lg h-full"
						style={{ background: 'linear-gradient(135deg, #12100E, #2c3e50)' }}
					>
						<div className="px-6 py-4 h-full flex flex-col justify-between">
							<div>
								<div className="font-bold text-xl text-white">{experience.position}</div>
								<div className="flex w-full">
									<p className="text-gray-200 text-base mb-2">{experience.companyName}</p>
									<p className="text-gray-400 text-base mb-2 ml-auto">{experience.location}</p>
								</div>
								<ul
									className="list-disc list-inside min-h-[9rem] overflow-y-auto scrollbar-gutter-stable"
									style={{ textAlign: 'justify' }}
								>
									{experience.duties.map((duty, index) => (
										<li key={index} className="text-gray-300 text-sm mb-1">{duty}</li>
									))}
								</ul>
							</div>
							<div className="flex justify-between items-center mt-4">
								<span className="text-gray-300 text-base">{experience.duration}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ExperienceSection;