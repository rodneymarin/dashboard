import { HTMLAttributes } from "react";
import { cn } from "../../../utils/utils";

export interface TableProps extends HTMLAttributes<HTMLDivElement> { }

export function Table({ className, ...props }: TableProps) {
  return (
    <div className={cn("w-full overflow-auto", className)} {...props} />
  );


}
