type Props = {
	children: React.ReactNode;
	className?: string;
};

const Heading = (props: Props) => {
	const { children, className } = props;
	return (
		<h1
			className={`flex gap-4 text-3xl font-bold tracking-tight text-zinc-800 dark:text-transparent sm:text-4xl lg:text-5xl ${className}`}
		>
			{children}
		</h1>
	);
};

export default Heading;
