import Link from 'next/link';
import { Heading } from './_atoms';

const Projects = () => {
	return (
		<div>
			<Heading>Projects</Heading>
			<div className="gap:12 mt-4 flex flex-col gap-6 md:flex-row md:gap-24">
				<section className="grid lg:grid-cols-[200px_1fr]">
					<div>
						<h3 className="text-gray-light-2 seq mb-1 text-base font-medium uppercase tracking-widest">
							Learn JS web app
						</h3>
						<Link
							className="font-bold text-blue-500 hover:underline"
							href={'https://learnjs.app/'}
							target="_blank"
						>
							learnjs.app
						</Link>
					</div>
					<div>
						<div>
							<h1 className="">
								A versatile web application designed to streamline and enhance the workflow of web
								developers. With a comprehensive suite of tools conveniently accessible in one
								centralized platform, Learnjs empowers developers to boost productivity, collaborate
								effectively, and deliver high-quality projects with ease.
							</h1>
							<h2 className="mt-4 text-xl font-bold">Key Features:</h2>
							<ul className="mt-1 space-y-4">
								<li>
									<strong>TS IDE (TypeScript Integrated Development Environment):</strong> Learnjs
									includes a powerful TypeScript IDE tailored to the needs of modern web
									development. With features such as syntax highlighting, code completion, and
									real-time error checking, developers can write clean, efficient TypeScript code
									with confidence. The IDE's intuitive interface and robust functionality enable
									seamless development and debugging of TypeScript projects.
								</li>
								<li>
									<strong>Text Diff Editor:</strong> Simplify the process of comparing and merging
									text files with Learnjs's Text Diff Editor. Whether you're reviewing changes
									between code revisions, collaborating with team members, or resolving conflicts in
									version control, this tool provides a user-friendly interface for visualizing and
									managing text differences. With side-by-side comparison and highlighting features,
									developers can quickly identify discrepancies and make informed decisions with
									ease.
								</li>
								<li>
									<strong>JSON Viewer:</strong> Visualize and manipulate JSON data effortlessly
									using Learnjs's built-in JSON Viewer. This tool offers a structured and
									interactive display of JSON objects, arrays, and nested elements, making it easy
									to navigate and understand complex data structures. Developers can inspect, edit,
									and validate JSON data in real time, ensuring accuracy and consistency in their
									web applications.
								</li>
								<li>
									<strong>TODOs Manager:</strong> Stay organized and focused on tasks with Learnjs's
									integrated TODOs Manager. This feature allows developers to create, prioritize,
									and track TODO items within their projects, providing a convenient way to manage
									workflow and track progress. With customizable tags, due dates, and status
									indicators, developers can effectively prioritize tasks and stay on top of their
									development goals.
								</li>
							</ul>
							<h2 className="mt-4 text-xl font-bold">Key Features:</h2>
							<ul className="mt-1 space-y-4">
								<li>
									<strong>Enhanced Productivity:</strong> By consolidating essential development
									tools into a single platform, Learnjs streamlines the development process,
									minimizing context switching and maximizing productivity.
								</li>
								<li>
									<strong>Improved Collaboration:</strong> With features like real-time
									collaboration in the Text Diff Editor and shared TODO lists, Learnjs facilitates
									seamless collaboration among team members, promoting communication and efficiency.
								</li>
								<li>
									<strong>Code Quality Assurance:</strong> The built-in TypeScript IDE and JSON
									Viewer empower developers to write clean, well-structured code and validate data
									integrity, ensuring high-quality output and minimizing errors.
								</li>
							</ul>
							<p>
								Overall, Learnjs is a must-have companion for web developers seeking to streamline
								their workflow, collaborate effectively, and deliver exceptional results in their
								projects. Whether you're a seasoned developer or just starting out, Learnjs provides
								the essential tools and features to elevate your development experience.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Projects;
