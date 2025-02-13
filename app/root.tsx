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
import tailwind from "~/tailwind.css?url";
import { HeadersFunction, LinksFunction } from "@remix-run/node";
import {
  fetchGithubProfile,
  fetchGithubRepos,
  fetchGithubSocialAccount,
} from "./utils/fetch-github.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
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
  const github_profile = await fetchGithubProfile();
  const social_accounts = await fetchGithubSocialAccount();
  const repos = await fetchGithubRepos();

  return {
    github_profile,
    social_accounts,
    repos,
  };
};

let cacheLoader: typeof loader | unknown;
export const clientLoader = async ({
  serverLoader,
}: ClientLoaderFunctionArgs) => {
  if (cacheLoader) {
    return cacheLoader;
  }

  cacheLoader = await serverLoader();

  return cacheLoader;
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
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
      <Outlet />
    </>
  );
}
