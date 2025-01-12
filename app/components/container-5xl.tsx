import { ReactNode } from "react";
import { cn } from "~/lib/utils";

export default function Container5xl({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(className, "relative mx-auto min-h-fit max-w-5xl")}>
      {children}
    </div>
  );
}
