import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	type?: "button" | "submit" | "reset";
	className?: string;
	disabled?: boolean;
}


const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	type = "button",
	className = "",
	disabled = false,
	...rest
}) => {
	console.log("button componenrt rendered");
	return (
		<button
			type={type}
			onClick={onClick}
			className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition ${className}`}
			disabled={disabled}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
