import { LinksFunction } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";
import typography from "~/typography.css?url";

export const meta: MetaFunction = () => [{ title: "Proyek | Naufal Faisal" }];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: typography },
];

export default function Proyek() {
  return <h1>Halo Proyek!</h1>;
}
