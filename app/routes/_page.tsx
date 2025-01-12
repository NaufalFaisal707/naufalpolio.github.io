import { Outlet, useLocation } from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";

import Container5xl from "~/components/container-5xl";
import NavbarLink from "~/components/navbar-link";

export default function Index() {
  const location = useLocation();

  return (
    <>
      <nav className="mx-4 h-24">
        <Container5xl className="flex h-full items-center justify-center">
          <NavbarLink className="relative flex w-fit" />
        </Container5xl>
      </nav>

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

      {/* <NavbarMobile className="sticky bottom-0 backdrop-blur bg-opacity-80 bg-white" /> */}
    </>
  );
}
