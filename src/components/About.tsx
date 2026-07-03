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

// Skill categories and their corresponding icons.
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

// Commands that can be clicked on to run.
const SUGGESTIONS = ["whoami", "skills", "education", "help"];

// Represents a line in the terminal, either an input command or an output response.
type Line = { id: number; role: "input" | "output"; content: ReactNode };

// Reveals true once the observed element enters view.
// Returns a ref to attach to the element and a boolean indicating visibility.
// The threshold parameter determines how much of the element must be visible before it's considered "in view".
// For example, a threshold of 0.2 means 20% of the element must be visible.
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

// Renders the output for the "help" command, listing available commands and their descriptions.
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

// Renders the output for the "whoami" command, providing a brief bio about the user.
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

// Renders the output for the "education" command, providing details about the user's educational background.
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

// Renders the output for the "skills" command, displaying categorized skill icons.
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

// The main AboutSection component that renders the interactive terminal-like interface.
// It handles user input, command execution, and displays the corresponding output.
// It also includes a typewriter effect for the subtitle when the section comes into view.
// The component uses the useInView hook to detect when it is visible in the viewport.
// It maintains state for the command history, current input, and the lines displayed in the terminal.
// The component also provides clickable suggestions for commands that users can run.
// The terminal interface is styled to resemble a command-line environment, with a title bar, output area, and input prompt.
// The component is designed to be responsive and accessible, with appropriate ARIA roles and labels.
// The component is exported as the default export for use in other parts of the application.
const AboutSection: React.FC = () => {
	// Use the custom hook to get a ref and visibility state for the section.
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
	// State for the current input, command history, history index, and greeting text.
	const [input, setInput] = useState("");
	const [history, setHistory] = useState<string[]>([]);
	const [historyIndex, setHistoryIndex] = useState<number | null>(null);
	const [greeting, setGreeting] = useState("");

	// Refs to keep track of the line IDs, the output body, the input field, and whether the typewriter effect has already run.
	const idRef = useRef(0);
	const bodyRef = useRef<HTMLDivElement | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const hasTyped = useRef(false);

	// Typewriter the subtitle once the section scrolls into view.
	// This effect runs only once when the section becomes visible and has not already typed the greeting.
	// It checks for the user's preference for reduced motion and either types out the greeting or displays it instantly.
	// The typing speed is set to 28 milliseconds per character.
	// The effect cleans up the interval when the component unmounts or when the section is no longer visible.
	// The greeting text is set to "this section talks back — try a command below."
	// The effect uses the setGreeting state updater to update the greeting text as it types.
	// The effect also ensures that the typing animation does not run again if the user scrolls away and back to the section.
	// The effect is dependent on the sectionVisible state, which is provided by the useInView hook.
	// The effect uses a ref to track whether the typing has already occurred, preventing multiple executions.
	// The effect also respects the user's system preferences for reduced motion, providing an accessible experience.
	// The effect is part of the AboutSection component, which renders an interactive terminal-like interface for user commands.

	useEffect(() => {
		if (!sectionVisible || hasTyped.current) return;
		hasTyped.current = true;

		// The full text to be displayed in the typewriter effect.
		const fullText = "this section talks back — try a command below.";
		const reduceMotion =
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		// If the user prefers reduced motion, display the full text instantly without typing animation.
		if (reduceMotion) {
			setGreeting(fullText);
			return;
		}

		// Set up an interval to type out the greeting one character at a time.
		let i = 0;
		const interval = setInterval(() => {
			i += 1;
			setGreeting(fullText.slice(0, i));
			if (i >= fullText.length) clearInterval(interval);
		}, 28);

		// Clean up the interval when the component unmounts or when the section is no longer visible.
		return () => clearInterval(interval);
	}, [sectionVisible]);

	// Scroll to the bottom of the terminal output whenever a new line is added.
	useEffect(() => {
		bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
	}, [lines]);

	// Adds a new line to the terminal output with a unique ID, role (input or output), and content.
	// The function increments the ID reference and updates the lines state with the new line.
	// It uses a functional state update to ensure that the previous lines are preserved and the new line is appended.
	// The function is used to display both user input commands and the corresponding output responses in the terminal interface.
	const pushLine = (role: Line["role"], content: ReactNode) => {
		idRef.current += 1;
		const id = idRef.current; // snapshot now, not read later inside the updater
		setLines((prev) => [...prev, { id, role, content }]);
	};

	// Executes a command entered by the user in the terminal input.
	// The function trims the input command and checks if it is empty, returning early if so.
	// It adds the command to the terminal output as an input line and updates the command history.
	// The function then checks the command against known commands and generates the appropriate output.
	// If the command is "clear" or "cls", it clears the terminal output.
	// If the command is "help", it displays a list of available commands.
	// If the command is "whoami", "about", or "bio", it displays a brief bio about the user.
	// If the command is "skills", "ls", or "ls skills", it displays categorized skill icons.
	// If the command is "education" or "edu", it displays educational background information.
	// If the command is "sudo make-coffee", it displays a humorous permission denied message.
	// For any other unrecognized command, it displays a "command not found" message with a suggestion to type "help" for available commands.
	// The function uses the pushLine function to add the output to the terminal display.
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

	// Handles keyboard events in the terminal input field.
	// The function checks for specific keys and performs actions accordingly.
	// If the "Enter" key is pressed, it runs the command entered in the input field and clears the input.
	// If the "ArrowUp" key is pressed, it navigates to the previous command in the history, if available, and updates the input field.
	// If the "ArrowDown" key is pressed, it navigates to the next command in the history or clears the input if at the end of the history.
	// The function prevents default behavior for arrow keys to avoid moving the cursor in the input field.
	// The function uses the historyIndex state to track the current position in the command history.
	// The function updates the input field with the command from history based on the navigation.
	// The function is used to provide a command-line-like experience in the terminal interface, allowing users to quickly access and re-run previous commands.
	// The function is part of the AboutSection component, which renders an interactive terminal-like interface for user commands.
	// The function is called in the onKeyDown event handler of the input field, enabling real-time command execution and history navigation.
	// The function enhances the usability of the terminal interface by allowing users to efficiently manage and execute commands without retyping them.
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
					> {/* Terminal output */}
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