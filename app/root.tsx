import {
  type ClientLoaderFunctionArgs,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { type LinksFunction, json } from "@vercel/remix";
import { SpeedInsights } from "@vercel/speed-insights/remix";
import Navbar from "./components/navbar";
import Container5xl from "./components/container-5xl";
import tailwind from "~/tailwind.css?url";
import typography from "~/typography.css?url";
import { fetchGithubProfile, type GithubUser } from "./utils";

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

export const loader = async () => {
  const account_info = await fetchGithubProfile(process.env.GITHUB_USER!);

  return json(account_info);
};

let loaderCache: GithubUser;
export const clientLoader = async ({
  serverLoader,
}: ClientLoaderFunctionArgs) => {
  if (loaderCache) {
    return json(loaderCache);
  }

  loaderCache = await serverLoader();

  return json(loaderCache);
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
      <nav className="sticky top-0 z-50 flex h-24 w-full bg-white/90 backdrop-blur">
        <Navbar className="relative m-auto flex w-fit rounded-md" />
      </nav>
      <Container5xl>
        <Outlet />
      </Container5xl>
    </>
  );
}
