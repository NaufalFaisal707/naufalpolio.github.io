import { Outlet, useLocation } from "@remix-run/react";
import { AnimatePresence } from "framer-motion";
import NavbarLink from "~/components/navbar-link";

export default function Index() {
  const location = useLocation();

  return (
    <>
      {/* <NavbarDesktop className="sticky top-0 backdrop-blur bg-opacity-80 bg-white" /> */}

      <nav className="max-w-5xl min-h-fit absolute w-full translate-x-[50%] right-[50%] top-8 z-50">
        <div className="ms-auto w-fit rounded-s-md flex gap-2 relative">
          <NavbarLink />
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>

      {/* <NavbarMobile className="sticky bottom-0 backdrop-blur bg-opacity-80 bg-white" /> */}
    </>
  );
}
