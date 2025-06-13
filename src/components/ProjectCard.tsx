// src/app/components/ProjectCard.tsx

import React from 'react';
import Image from 'next/image';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface ProjectCardProps {
	imgUrl: string;
	title: string;
	description: string;
	gitUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description, gitUrl }) => {
	return (
		<div className="rounded-xl overflow-hidden bg-[#181818]">
			<div className="relative h-52 md:h-80 group">
				<Image
					src={imgUrl}
					alt={title}
					fill
					style={{ objectFit: 'cover' }}
					priority
					sizes="(max-width: 768px) 100vw, 50vw"
				/>

				<div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex items-center justify-center hover:bg-opacity-80 transition-opacity duration-500">
					<Link
						href={gitUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="h-14 w-14 mr-2 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
					>
						<CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover:text-white" />
					</Link>
				</div>
			</div>

			<div className="text-white py-6 px-4">
				<h5 className="text-xl font-semibold mb-2">{title}</h5>
				<p className="text-[#ADB7BE]">{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
