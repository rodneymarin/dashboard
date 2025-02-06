import { HTMLAttributes } from "react";
import { cn } from "../../../utils/utils";


export interface TableCellProps extends HTMLAttributes<HTMLDivElement> { }

export function TableCell({ className, ...props }: TableCellProps) {
  return (
    <div
      className={cn("flex line-clamp-1 break-words px-1", className)}
      {...props} />

  );
}
