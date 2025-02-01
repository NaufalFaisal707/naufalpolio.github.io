import { useLocation } from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "~/lib/utils";

export default function Container5xl({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const location = useLocation();

  return (
    <div className={cn(className, "relative mx-auto min-h-fit max-w-5xl")}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 10 }}
        transition={{
          type: "spring",
          visualDuration: 0.3,
          bounce: 0.4,
        }}
      >
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </motion.div>
    </div>
  );
}
