import { Outlet, useLocation } from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import Container5xl from "~/components/container-5xl";
import NavbarLink from "~/components/navbar-link";

export default function Index() {
  const location = useLocation();

  return (
    <>
      <nav className="sticky top-0 z-50 h-24 w-full bg-white/90 backdrop-blur">
        <Container5xl className="flex h-full items-center justify-center">
          <NavbarLink className="relative flex w-fit rounded-md" />
        </Container5xl>
      </nav>

      <div className="overflow-hidden">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{
            type: "spring",
            visualDuration: 0.3,
            bounce: 0.4,
          }}
        >
          <AnimatePresence mode="wait">
            <Outlet />
          </AnimatePresence>
        </motion.div>
      </div>

      {/* <NavbarMobile className="sticky bottom-0 backdrop-blur bg-opacity-80 bg-white" /> */}
    </>
  );
}
