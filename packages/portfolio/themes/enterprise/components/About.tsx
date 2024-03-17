import Link from 'next/link';

const About = () => {
	return (
		<div className="flex-col gap-16 md:flex md:flex-row">
			<div>
				<h1 className="flex gap-4 text-4xl font-bold tracking-tight text-zinc-800 dark:text-transparent sm:text-5xl">
					About
				</h1>
				<p className="mt-6 text-justify text-base text-zinc-600 dark:text-zinc-400">
					Hi there! I&apos;m a passionate software developer with a knack for problem-solving and a
					strong commitment to community engagement. With over{' '}
					<span className="font-bold">25000</span> reputation points on{' '}
					<Link
						className="font-bold text-blue-500 underline"
						href={'https://stackoverflow.com/users/9153448/decpk'}
						target="_blank"
					>
						Stackoverflow
					</Link>
					, I&apos;ve established myself as a trusted contributor within the developer community.
					Over the years, I&apos;ve had the privilege of answering over{' '}
					<span className="font-bold">1400</span> questions, sharing my expertise, and helping
					fellow developers overcome challenges in their projects.
				</p>

				<div>
					<p className="mt-6 text-justify text-base text-zinc-600 dark:text-zinc-400">
						My journey on Stackoverflow reflects my dedication to continuous learning and my desire
						to give back to the community that has supported me throughout my career. I believe in
						the power of collaboration and knowledge-sharing to drive innovation and foster growth
						within the tech industry.
					</p>
					<p className="mt-6 text-justify text-base text-zinc-600 dark:text-zinc-400">
						Beyond Stack Overflow, I&apos;m constantly exploring new technologies, honing my skills,
						and seeking opportunities to contribute to open-source projects. Whether it&apos;s
						debugging complex issues or providing guidance on best practices, I thrive on the
						satisfaction of helping others succeed in their endeavors. Let&apos;s connect and embark
						on this exciting journey of discovery together!
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
