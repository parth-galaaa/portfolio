"use client";
import React, {
	useEffect,
	useRef,
	useState,
	KeyboardEvent,
	ReactNode,
} from "react";
import Image from "next/image";

interface Icon {
	src: string;
	alt: string;
}

interface SkillCategory {
	label: string;
	icons: Icon[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
	{
		label: "Languages",
		icons: [
			{ src: "/images/python.svg", alt: "Python" },
			{ src: "/images/javascript.svg", alt: "JavaScript" },
			{ src: "/images/typescript.svg", alt: "TypeScript" },
			{ src: "/images/sql.svg", alt: "SQL" },
			{ src: "/images/php.svg", alt: "PHP" },
			{ src: "/images/java.svg", alt: "Java" },
			{ src: "/images/html.svg", alt: "HTML5" },
		],
	},
	{
		label: "Frameworks & Libraries",
		icons: [
			{ src: "/images/fastapi.svg", alt: "FastAPI" },
			{ src: "/images/django.svg", alt: "Django" },
			{ src: "/images/nodejs.svg", alt: "Node.js" },
			{ src: "/images/nextjs.svg", alt: "Next.js" },
			{ src: "/images/react.svg", alt: "React.js" },
			{ src: "/images/mapbox.svg", alt: "Mapbox GL JS" },
			{ src: "/images/pandas.svg", alt: "Pandas" },
			{ src: "/images/numpy.svg", alt: "NumPy" },
			{ src: "/images/scikitlearn.svg", alt: "Scikit-Learn" },
			{ src: "/images/tensorflow.svg", alt: "TensorFlow" },
			{ src: "/images/pytorch.svg", alt: "PyTorch" },
			{ src: "/images/opencv.svg", alt: "OpenCV" },
		],
	},
	{
		label: "Databases",
		icons: [
			{ src: "/images/postgresql.svg", alt: "PostgreSQL" },
			{ src: "/images/mysql.svg", alt: "MySQL" },
			{ src: "/images/sqlserver.svg", alt: "MS SQL" },
			{ src: "/images/mongodb.svg", alt: "MongoDB" },
		],
	},
	{
		label: "Cloud & DevOps",
		icons: [
			{ src: "/images/aws.svg", alt: "AWS" },
			{ src: "/images/azure.svg", alt: "Microsoft Azure" },
			{ src: "/images/docker.svg", alt: "Docker" },
			{ src: "/images/git.svg", alt: "Git" },
		],
	},
	{
		label: "Data & Analytics",
		icons: [
			{ src: "/images/powerbi.svg", alt: "Power BI" },
			{ src: "/images/tableau.svg", alt: "Tableau" },
			{ src: "/images/powerautomate.svg", alt: "Power Automate" },
		],
	},
];

const SUGGESTIONS = ["whoami", "skills", "education", "help"];

type Line = { id: number; role: "input" | "output"; content: ReactNode };

// Reveals true once the observed element enters view.
function useInView<T extends HTMLElement>(threshold = 0.2) {
	const ref = useRef<T | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setVisible(true);
			},
			{ threshold }
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold]);

	return [ref, visible] as const;
}

const HelpOutput = () => (
	<div className="space-y-1">
		<p className="text-gray-400">Available commands:</p>
		<div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 pt-1">
			<span className="text-blue-300">whoami</span>
			<span className="text-gray-400">a little about me</span>
			<span className="text-blue-300">skills</span>
			<span className="text-gray-400">tools & tech I work with</span>
			<span className="text-blue-300">education</span>
			<span className="text-gray-400">where I studied</span>
			<span className="text-blue-300">clear</span>
			<span className="text-gray-400">clear the terminal</span>
		</div>
	</div>
);

const AboutOutput = () => (
	<div className="max-w-xl space-y-3 leading-relaxed text-gray-300">
		<p>
			Hi, I&apos;m Parth. I&apos;m someone who likes figuring things out.
		</p>
		<p>
			That curiosity has led me down all kinds of rabbit holes—from backend
			systems and AI to random weekend projects that started with a simple
			&quot;what if?&quot; I enjoy building software that&apos;s thoughtful,
			reliable, and actually useful. Most of what I learn comes from
			experimenting, breaking things, and building them again.
		</p>
		<p>
			This website is where I share the projects I&apos;ve worked on, the
			ideas I&apos;m exploring, and the occasional lesson learned along the
			way. Thanks for stopping by.
		</p>
	</div>
);

const EducationOutput = () => (
	<div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
		<span className="text-gray-500">School</span>
		<span className="text-gray-200">University of Windsor</span>
		<span className="text-gray-500">Degree</span>
		<span className="text-gray-200">
			Bachelor of Computer Science Honours (Co-op)
		</span>
		<span className="text-gray-500">Focus</span>
		<span className="text-gray-200">
			Specialization in AI, Minor in Mathematics
		</span>
		<span className="text-gray-500">Duration</span>
		<span className="text-gray-200">Sep 2021 – Apr 2025</span>
	</div>
);

const SkillsOutput = () => (
	<div className="space-y-4">
		{SKILL_CATEGORIES.map((category) => (
			<div key={category.label}>
				<p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-300">
					{category.label}
				</p>
				<div className="flex flex-wrap gap-2">
					{category.icons.map((icon) => (
						<span
							key={icon.alt}
							title={icon.alt}
							className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-700/60 bg-gray-800/40 transition-colors hover:border-blue-400/50"
						>
							<Image
								src={icon.src}
								alt={icon.alt}
								width={16}
								height={16}
								unoptimized
							/>
						</span>
					))}
				</div>
			</div>
		))}
	</div>
);

const AboutSection: React.FC = () => {
	const [sectionRef, sectionVisible] = useInView<HTMLElement>(0.15);
	const [lines, setLines] = useState<Line[]>([
		{
			id: -1,
			role: "output",
			content: (
				<span className="text-gray-500">
					Type a command to get started — try{" "}
					<span className="text-blue-300">skills</span>.
				</span>
			),
		},
	]);
	const [input, setInput] = useState("");
	const [history, setHistory] = useState<string[]>([]);
	const [historyIndex, setHistoryIndex] = useState<number | null>(null);
	const [greeting, setGreeting] = useState("");

	const idRef = useRef(0);
	const bodyRef = useRef<HTMLDivElement | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const hasTyped = useRef(false);

	// Typewriter the subtitle once the section scrolls into view.
	useEffect(() => {
		if (!sectionVisible || hasTyped.current) return;
		hasTyped.current = true;

		const fullText = "this section talks back — try a command below.";
		const reduceMotion =
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		if (reduceMotion) {
			setGreeting(fullText);
			return;
		}

		let i = 0;
		const interval = setInterval(() => {
			i += 1;
			setGreeting(fullText.slice(0, i));
			if (i >= fullText.length) clearInterval(interval);
		}, 28);

		return () => clearInterval(interval);
	}, [sectionVisible]);

	useEffect(() => {
		bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
	}, [lines]);

	const pushLine = (role: Line["role"], content: ReactNode) => {
		idRef.current += 1;
		const id = idRef.current; // snapshot now, not read later inside the updater
		setLines((prev) => [...prev, { id, role, content }]);
	};

	const runCommand = (raw: string) => {
		const cmd = raw.trim();
		if (!cmd) return;

		pushLine("input", cmd);
		setHistory((prev) => [...prev, cmd]);
		setHistoryIndex(null);

		const key = cmd.toLowerCase();
		if (key === "clear" || key === "cls") {
			setLines([]);
			return;
		}

		let output: ReactNode;
		if (key === "help") output = <HelpOutput />;
		else if (key === "whoami" || key === "about" || key === "bio")
			output = <AboutOutput />;
		else if (key === "skills" || key === "ls" || key === "ls skills")
			output = <SkillsOutput />;
		else if (key === "education" || key === "edu")
			output = <EducationOutput />;
		else if (key === "sudo make-coffee")
			output = <span className="text-gray-400">Permission denied. Nice try ☕</span>;
		else
			output = (
				<span className="text-gray-500">
					command not found: <span className="text-gray-300">{cmd}</span>.
					Type <span className="text-blue-300">help</span> to see what&apos;s
					available.
				</span>
			);

		pushLine("output", output);
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			runCommand(input);
			setInput("");
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			if (history.length === 0) return;
			const nextIndex =
				historyIndex === null
					? history.length - 1
					: Math.max(0, historyIndex - 1);
			setHistoryIndex(nextIndex);
			setInput(history[nextIndex]);
		} else if (e.key === "ArrowDown") {
			e.preventDefault();
			if (historyIndex === null) return;
			const nextIndex = historyIndex + 1;
			if (nextIndex >= history.length) {
				setHistoryIndex(null);
				setInput("");
			} else {
				setHistoryIndex(nextIndex);
				setInput(history[nextIndex]);
			}
		}
	};

	return (
		<section
			id="about"
			className="mt-8 px-4 text-white sm:mb-16 sm:px-6 md:mb-28 lg:mb-32 lg:px-8"
			ref={sectionRef}
		>
			<div className="mx-auto max-w-3xl">
				{/* Title */}
				<div
					className={`mb-10 transition-all duration-1000 ${sectionVisible
						? "translate-y-0 opacity-100"
						: "translate-y-8 opacity-0"
						}`}
				>
					<h2 className="text-4xl font-bold text-white lg:text-6xl">
						About Me
					</h2>
					<p className="mt-3 font-mono text-sm text-blue-300/80">
						<span className="text-gray-500">$</span> {greeting}
						<span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-blue-300/70 align-middle" />
					</p>
				</div>

				{/* Terminal */}
				<div
					className={`overflow-hidden rounded-2xl border border-gray-700/60 bg-[#0b0f19]/90 shadow-2xl transition-all duration-1000 delay-200 ${sectionVisible
						? "translate-y-0 opacity-100"
						: "translate-y-8 opacity-0"
						}`}
					onClick={() => inputRef.current?.focus()}
				>
					{/* Title bar */}
					<div className="flex items-center gap-2 border-b border-gray-700/60 bg-gray-800/40 px-4 py-3">
						<span className="h-3 w-3 rounded-full bg-red-400/70" />
						<span className="h-3 w-3 rounded-full bg-yellow-400/70" />
						<span className="h-3 w-3 rounded-full bg-green-400/70" />
						<span className="ml-2 font-mono text-xs text-gray-500">
							parth@portfolio — zsh
						</span>
					</div>

					{/* Output */}
					<div
						ref={bodyRef}
						role="log"
						aria-live="polite"
						className="max-h-90 min-h-70 space-y-3 overflow-y-auto p-5 font-mono text-sm md:text-[15px]"
					>
						{lines.map((line) =>
							line.role === "input" ? (
								<div key={line.id} className="flex gap-2">
									<span className="shrink-0 text-blue-400">
										parth@portfolio
									</span>
									<span className="shrink-0 text-gray-600">~ $</span>
									<span className="text-white">{line.content}</span>
								</div>
							) : (
								<div key={line.id} className="pl-0">
									{line.content}
								</div>
							)
						)}

						{/* Prompt */}
						<div className="flex items-center gap-2">
							<span className="shrink-0 text-blue-400">parth@portfolio</span>
							<span className="shrink-0 text-gray-600">~ $</span>
							<label htmlFor="terminal-input" className="sr-only">
								Terminal command input
							</label>
							<input
								id="terminal-input"
								ref={inputRef}
								value={input}
								onChange={(e) => setInput(e.target.value)}
								onKeyDown={handleKeyDown}
								spellCheck={false}
								autoComplete="off"
								autoCorrect="off"
								autoCapitalize="off"
								className="flex-1 bg-transparent text-white caret-blue-400 outline-none"
							/>
						</div>
					</div>

					{/* Suggestions */}
					<div className="flex flex-wrap gap-2 border-t border-gray-700/60 bg-gray-800/20 px-5 py-3">
						{SUGGESTIONS.map((s) => (
							<button
								key={s}
								type="button"
								onClick={() => runCommand(s)}
								className="rounded-md border border-gray-700/60 px-2.5 py-1 font-mono text-xs text-gray-400 transition-colors hover:border-blue-400/50 hover:text-blue-300"
							>
								{s}
							</button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;