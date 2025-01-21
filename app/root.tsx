import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import tailwind from "./tailwind.css?url";
import React from "react";
import Container5xl from "./components/container-5xl";
import NavbarLink from "./components/navbar-link";
import { AnimatePresence, motion } from "framer-motion";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: tailwind,
  },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Links />
        <Meta />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
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
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
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
    </>
  );
}

export function HydrateFallback() {
  return (
    <>
      <p>Sedang memuat halaman...</p>
      <noscript>Pastikan untuk mengaktifkan Javascript pada browser!.</noscript>
    </>
  );
}
