import { ThHTMLAttributes } from "react";
import { cn } from "../../../utils/utils";

export interface TableHeadProps extends ThHTMLAttributes<HTMLDivElement> { }

export function TableHead({ className, ...props }: TableHeadProps) {
  return <div
    className={cn("flex line-clamp-1 break-words px-1 text-mid-accent", className)}
    {...props} />;
}
