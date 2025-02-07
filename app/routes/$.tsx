import { LinksFunction } from "@remix-run/node";
import typography from "~/typography.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: typography },
];

export default function UnknownPage() {
  return <h1>404</h1>;
}
