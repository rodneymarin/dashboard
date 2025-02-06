import { HTMLAttributes } from "react";
import { cn } from "../../../utils/utils";

export interface TableBodyProps extends HTMLAttributes<HTMLDivElement> { }

export function TableBody({ className, ...props }: TableBodyProps) {
  return <div className={cn("flex flex-col", className)} {...props} />;
}
