import {
  ClientLoaderFunctionArgs,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { SpeedInsights } from "@vercel/speed-insights/remix";
import Navbar from "./components/navbar";
import Container5xl from "./components/container-5xl";
import tailwind from "~/tailwind.css?url";
import typography from "~/typography.css?url";
import { fetchGithubProfile, GithubUser } from "./utils";
import { HeadersFunction, LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: typography },
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

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=3600",
});

export const loader = async () => {
  const account_info = await fetchGithubProfile(process.env.GITHUB_USER!);

  return Response.json(account_info);
};

let cacheLoader: GithubUser | unknown;
export const clientLoader = async ({
  serverLoader,
}: ClientLoaderFunctionArgs) => {
  if (cacheLoader) {
    return cacheLoader;
  }

  cacheLoader = await serverLoader();

  return Response.json(cacheLoader);
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <SpeedInsights />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <nav className="sticky top-0 z-50 grid h-24 w-full place-content-center bg-white/90 backdrop-blur">
        <Navbar className="relative flex rounded-md" />
      </nav>
      <Container5xl className="space-y-4">
        <Outlet />
      </Container5xl>
    </>
  );
}
