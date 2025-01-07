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
    <div
      className={cn(
        className,
        "mx-auto max-w-5xl h-full flex items-center relative min-h-fit"
      )}
    >
      {children}
    </div>
  );
}
