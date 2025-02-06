import { HTMLAttributes } from "react";
import { cn } from "../../../utils/utils";


export interface TableRowProps extends HTMLAttributes<HTMLDivElement> { }

export function TableRow({ className, ...props }: TableRowProps) {
  return (
    <div className={cn("py-3 w-full flex", className)} {...props} />
  );
}
