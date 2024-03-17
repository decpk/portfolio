import React from 'react';

const gradientVariant = {
	zincToBlueToZinc: 'bg-gradient-to-r from-black-800 via-zinc-800 to-black-500',
};

type Props = {
	children: string;
	className?: string;
	as?: keyof HTMLElementTagNameMap;
	variant?: keyof typeof gradientVariant;
};

const GradientText = (props: Props) => {
	const { children, as = 'div', className, variant = 'zincToBlueToZinc' } = props;
	return React.createElement(
		as,
		{
			className: ` ${className || ''}`,
		},
		children,
	);
};

export default GradientText;
