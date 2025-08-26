"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
	const [, setShowAboutMe] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > window.innerHeight * 0.5) {
				setShowAboutMe(true);
			} else {
				setShowAboutMe(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleDownloadCV = () => {
		const a = document.createElement('a');
		a.href = './ParthGala_Resume.pdf';
		a.download = 'ParthGala_Resume.pdf';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	};

	return (
		<section className="hero-section" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

			<motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
				<div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
					<h1
						className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold text-white mb-4"
						style={{ lineHeight: '1.1' }}
					>
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
							Hello, I&apos;m{" "}
						</span>
						<br />
						<TypeAnimation
							sequence={[
								'Parth Gala',
								1000,
								'Software Developer',
								1000,
								'Web Developer',
								1000,
								'Mobile Developer',
								1000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>

					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						Welcome to my online space, where you&apos;ll discover a fusion of my skills, experiences, and creativity, offering insight into who I am...
					</p>
					<div>
						<button className="px-1 py-1 sm:w-fit rounded-full mr-3 bg-gradient-to-br from-blue-500 via-blue-500 to-green-500 hover:bg-slate-800 text-white mt-3 ">
							<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2" onClick={handleDownloadCV}>Download CV</span>
						</button>
						<Link href="#about">
							<button className="px-6 py-3 sm:w-fit rounded-full hover:bf-slate-200 text-white">Learn More
								<ChevronRightIcon className="text-white" />
							</button>
						</Link>
					</div>
				</div>
			</motion.div>

		</section>
	);
};

export default HeroSection;