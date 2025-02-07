import { LinksFunction } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";
import typography from "~/typography.css?url";

export const meta: MetaFunction = () => [{ title: "Tentang | Naufal Faisal" }];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: typography },
];

export default function Tentang() {
  return <h1>Halo Tentang!</h1>;
}
