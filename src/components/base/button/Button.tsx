import { ButtonHTMLAttributes, ReactNode } from "react";
import { LuLoader } from "react-icons/lu";
import { cn } from "../../../utils/utils";

export type buttonSizes = "default" | "sm";
export type buttonIconLocation = "leading" | "trailing";


const buttonStyles = {
	base: {
		background: "bg-button-bg disabled:bg-disabled-bg [&>span]:disabled:text-disabled-fg [&>div]:disabled:bg-disabled-bg [&>*]:disabled:pointer-events-none",
		text: ""
	},
	size: {
		default: {
			background: "px-[28px] py-[16px] max-h-[50px] w-full",
			text: "text-md",
		},
		sm: { background: "px-[20px] py-[8px] w-fit h-fit", text: "text-sm" },
	},
	iconLocation: {
		leading: "flex-row",
		trailing: "flex-row-reverse",
	},
};

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
	classNameBackground?: string;
	classNameOverlay?: string;
	classNameText?: string;
	size?: buttonSizes;
	iconLocation?: buttonIconLocation;
	icon?: ReactNode;
	loading?: boolean;
}

export function Button({ children, classNameBackground, classNameOverlay, classNameText, size = "default", type = "button", iconLocation, icon, disabled, loading, ...props }: ButtonProps) {
	return (
		<button
			data-iconleading={iconLocation === "leading"}
			className={cn("relative rounded-md flex data-[iconleading=true]:flex-row data-[iconleading=false]:flex-col gap-1.5 justify-center items-center cursor-pointer overflow-hidden disabled:pointer-events-none disabled:cursor-not-allowed",
				buttonStyles.size[size].background,
				classNameBackground
			)}
			disabled={disabled || loading}
			type={type}
			{...props}
		>
			<div className={cn("absolute disabled:hidden inset-0 opacity-0 hover:opacity-10 active:opacity-30 bg-white w-full", classNameOverlay)}></div>
			{loading ? (
				<>
					<LuLoader size={24} className="animate-spin" />
				</>
			) : (
				<>
					{icon}
					<span className={cn("z-10 text-center whitespace-nowrap pointer-events-none text-white", buttonStyles.size[size || "default"].text, classNameText)}>{children}</span>
				</>
			)}
		</button>
	);
}
