import { HTMLAttributes } from "react";
import { cn } from "../../../utils/utils";

export interface TableHeaderProps
  extends HTMLAttributes<HTMLDivElement> { }

export function TableHeader({ className, ...props }: TableHeaderProps) {
  return (
    <div className={cn("py-3 flex px-6", className)} {...props} />
  );
}
