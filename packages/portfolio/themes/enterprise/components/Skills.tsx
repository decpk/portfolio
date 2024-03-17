import { FaCss3, FaHtml5, FaJs, FaReact, FaSass } from 'react-icons/fa6';
import { SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs, TbBrandRedux } from 'react-icons/tb';

type Props = {};

const SKILLS = {
	languagesAndTools: [
		{
			name: 'HTML5',
			icon: FaHtml5,
		},
		{
			name: 'CSS3',
			icon: FaCss3,
		},
		{
			name: 'JavaScript',
			icon: FaJs,
		},
		{
			name: 'TypeScript',
			icon: SiTypescript,
		},
		{
			name: 'SaSS',
			icon: FaSass,
		},
	],
	librariesAndFrameworks: [
		{
			name: 'React',
			icon: FaReact,
		},
		{
			name: 'Redux',
			icon: TbBrandRedux,
		},
		{
			name: 'Next.js',
			icon: TbBrandNextjs,
		},
		{
			name: 'Tailwind CSS',
			icon: SiTailwindcss,
		},
		{
			name: 'Styled Components',
			icon: SiStyledcomponents,
		},
	],
};

const Skills = (props: Props) => {
	return (
		<div>
			<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-transparent sm:text-5xl">
				My Skills
			</h1>
			<div className="gap:12 mt-6 flex flex-col gap-6 md:flex-row md:gap-24">
				<div className="">
					<h3 className="text-gray-light-2 seq mb-4 text-base font-medium uppercase tracking-widest">
						LANGUAGES AND TOOLS
					</h3>
					<div className="seq flex transform-gpu flex-wrap gap-6">
						{SKILLS.languagesAndTools.map((skill) => (
							<div key={skill.name} className="flex items-center gap-2">
								<skill.icon className="text-5xl text-zinc-600 dark:text-zinc-400" />
								{/* <p className="text-lg text-zinc-600 dark:text-zinc-400">{skill.name}</p> */}
							</div>
						))}
					</div>
				</div>
				<div className="md:flex md:flex-col">
					<h3 className="text-gray-light-2 seq mb-4 text-base font-medium uppercase tracking-widest">
						Libraries and Frameworks
					</h3>
					<div className="seq flex transform-gpu flex-wrap gap-6">
						{SKILLS.librariesAndFrameworks.map((skill) => (
							<div key={skill.name} className="flex items-center gap-2">
								<skill.icon className="text-5xl text-zinc-600 dark:text-zinc-400" />
								{/* <p className="text-lg text-zinc-600 dark:text-zinc-400">{skill.name}</p> */}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
