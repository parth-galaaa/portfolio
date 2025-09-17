"use client";
import React from "react";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection: React.FC = () => {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 500], [0, 150]);
	const opacity = useTransform(scrollY, [0, 300], [1, 0]);
	const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

	const handleDownloadCV = () => {
		const a = document.createElement("a");
		a.href = "./ParthGala_Resume.pdf";
		a.download = "ParthGala_Resume.pdf";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	};

	return (
		<section
			className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
			style={{ background: "transparent" }}
			aria-label="Hero section"
		>
			{/* Main Content */}
			<motion.div
				style={{ y, opacity, scale } as any}
				className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
			>
				<motion.div
					className="text-center space-y-12"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.2, ease: "easeOut" }}
				>
					{/* Heading */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
						className="space-y-6"
					>
						<motion.h1
							className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9]"
							style={{
								background: "linear-gradient(135deg, #ffffff 0%, #e5e7eb 30%, #9ca3af 100%)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
								filter: "drop-shadow(0 4px 20px rgba(255,255,255,0.1))",
							} as any}
						>
							<motion.div
								initial={{ opacity: 0, rotateX: 90 }}
								animate={{ opacity: 1, rotateX: 0 }}
								transition={{ duration: 0.8, delay: 0.5 }}
								className="block perspective-1000"
							>
								<span
									style={{
										background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #22c55e 100%)",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
										backgroundClip: "text",
									} as any}
								>
									Hello, I'm{" "}
								</span>
							</motion.div>

							<motion.div
								className="block mt-4 relative"
								initial={{ opacity: 0, rotateX: 90 }}
								animate={{ opacity: 1, rotateX: 0 }}
								transition={{ duration: 0.8, delay: 0.7 }}
							>
								<TypeAnimation
									sequence={[
										"Parth Gala",
										2500,
										"Software Developer",
										2500,
										"Web Developer",
										2500,
										"AI Developer",
										2500,
										"Mobile Developer",
										2500,
									]}
									wrapper="span"
									speed={60}
									repeat={Infinity}
									className="relative"
									style={{
										background:
											"linear-gradient(135deg, #3b82f6 0%, #8b5cf6 25%, #06b6d4 50%, #22c55e 75%, #f59e0b 100%)",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
										backgroundClip: "text",
										backgroundSize: "200% 200%",
										animation: "gradientShift 8s ease infinite",
									} as any}
								/>
							</motion.div>
						</motion.h1>
					</motion.div>

					{/* Subtext */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1 }}
						className="space-y-4"
					>
						<p className="text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
							<motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1.2, duration: 0.8 }}
							>
								Step into my digital realm where
							</motion.span>
							<motion.span
								className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-medium mx-2"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1.4, duration: 0.8 }}
							>
								I create stuff sometimes.
							</motion.span>
						</p>
					</motion.div>

					{/* Action Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1.3 }}
						className="flex flex-col sm:flex-row gap-4 justify-center items-center"
					>
						{/* Download CV */}
						<motion.button
							onClick={handleDownloadCV}
							className="group relative w-56 h-12 rounded-2xl font-bold text-white shadow-2xl overflow-hidden backdrop-blur-sm flex items-center justify-center"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							style={{
								background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #22c55e 100%)",
								backgroundSize: "200% 200%",
							} as any}
							animate={{
								backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
							}}
							transition={{
								backgroundPosition: {
									duration: 8,
									repeat: Infinity,
									ease: "linear",
								},
							}}
						>
							<span className="relative z-10 flex items-center gap-3 text-lg">
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
								Download CV
							</span>
							<motion.div
								className="absolute inset-0 bg-white/10 rounded-2xl"
								initial={{ opacity: 0 }}
								whileHover={{ opacity: 1 }}
								transition={{ duration: 0.25 }}
							/>
						</motion.button>

						{/* Explore My Work */}
						<Link href="#about">
							<motion.button
								className="group relative w-56 h-12 rounded-2xl font-bold text-gray-300 backdrop-blur-md hover:border-blue-400/50 hover:text-white transition-all duration-500 overflow-hidden flex items-center justify-center"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className="relative z-10 flex items-center gap-3 text-lg">
									Explore My Work
									<motion.div
										whileHover={{ x: 8, rotate: 45 }}
										transition={{
											type: "spring",
											stiffness: 400,
											damping: 10,
										}}
									>
										<ChevronRightIcon className="text-current" />
									</motion.div>
								</span>
								<motion.div
									className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-2xl"
									initial={{ x: "-100%" }}
									whileHover={{ x: "0%" }}
									transition={{ duration: 0.5 }}
								/>
							</motion.button>
						</Link>
					</motion.div>

					{/* Scroll Indicator */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 2 }}
						className="mt-6 flex flex-col items-center"
					>
						<motion.div
							animate={{ y: [0, 10, 0] }}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="relative flex flex-col items-center"
						>
							{/* Outer track (smaller) */}
							<div className="relative w-6 h-12 sm:w-7 sm:h-14 border-2 border-gray-400/30 rounded-full flex justify-center overflow-hidden bg-transparent">
								{/* Moving dot */}
								<motion.div
									className="absolute left-1/2 transform -translate-x-1/2 w-1.5 h-4 rounded-full z-20"
									animate={{ y: [4, 12, 4] }}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									style={{
										background:
											"linear-gradient(180deg, rgba(59,130,246,1) 0%, rgba(139,92,246,1) 40%, rgba(34,197,94,1) 100%)",
									}}
								/>
								{/* Glow behind dot */}
								<motion.div
									className="absolute inset-0 rounded-full z-10 pointer-events-none"
									animate={{ opacity: [0.2, 0.6, 0.2] }}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									style={{
										background:
											"linear-gradient(180deg, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.12) 50%, rgba(34,197,94,0.12) 100%)",
									}}
								/>
							</div>
							<motion.p
								className="text-gray-400 text-xs sm:text-sm mt-3 font-light tracking-wide"
								animate={{ opacity: [0.5, 1, 0.5] }}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							>
								SCROLL TO EXPLORE
							</motion.p>
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.div>

			<style jsx>{`
				@keyframes gradientShift {
					0%,
					100% {
						background-position: 0% 50%;
					}
					50% {
						background-position: 100% 50%;
					}
				}
				.perspective-1000 {
					perspective: 1000px;
				}
			`}</style>
		</section>
	);
};

export default HeroSection;
