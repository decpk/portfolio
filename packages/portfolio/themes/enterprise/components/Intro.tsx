import Image from 'next/image';
import { FaLinkedin, FaStackOverflow } from 'react-icons/fa6';
import { SocialLink } from '.';
import proudCode from '../public/favicon/proud_coder.svg';

const HeroImage = () => <Image src={proudCode} alt="developer" fill />;

const Intro = () => {
	return (
		<div className="flex">
			<div className="">
				<div className="flex">
					<h1 className="bg-gradient-to-r from-zinc-500 via-blue-500 to-zinc-800 bg-clip-text text-2xl font-bold tracking-tight text-transparent text-zinc-800 dark:text-transparent sm:text-5xl md:text-4xl">
						<span className="md:hidden">Frontend software engineer</span>
						<span className="hidden md:block lg:hidden">
							Frontend software engineer who enjoys building UI.
						</span>
						<span className="hidden lg:block">
							Frontend software engineer who enjoys building beautiful UI.
						</span>
					</h1>
					<div className="relative hidden w-[80%] md:block md:h-[130px] lg:hidden">
						<HeroImage />
					</div>
				</div>
				<p className="mt-2 text-justify text-base text-zinc-600 dark:text-zinc-400 md:mt-6">
					Hi. I&apos;m <span className="font-bold">Praveen Kumar</span>, a Software Engineer based
					in Bangalore, India. I&apos;m currently working as a React Native developer for
					MakeMyTrip. I am passionate about personal growth and progressing in my career. This is my
					personal website where you can learn more about me, read articles I&apos;ve written.
				</p>
				<div className="mt-6 flex gap-4">
					<SocialLink
						className="m-0 h-8 w-8 text-zinc-950"
						href="https://www.linkedin.com/in/dec/"
						ariaLabel="Follow on LinkedIn"
						icon={FaLinkedin}
					/>

					<SocialLink
						className="m-0 h-8 w-8 text-zinc-950"
						href="https://stackoverflow.com/users/9153448/decpk"
						ariaLabel="Follow on LinkedIn"
						icon={FaStackOverflow}
					/>
				</div>
			</div>
			<div className="relative hidden h-[320px] w-full lg:block xl:h-[240px]">
				<HeroImage />
			</div>
		</div>
	);
};

export default Intro;
