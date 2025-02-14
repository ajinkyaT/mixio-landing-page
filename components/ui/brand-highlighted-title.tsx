import { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export function BrandHighlightedTitle({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-brand-coral via-brand-orange to-brand-yellow bg-clip-text text-transparent",
        "font-semibold",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
