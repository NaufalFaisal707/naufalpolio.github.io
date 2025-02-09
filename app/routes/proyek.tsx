import { LinksFunction } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";
import typography from "~/typography.css?url";

export const meta: MetaFunction = () => [
  { title: "Proyek | Naufal Faisal" },
  {
    name: "description",
    content:
      "Proyek yang saya buat untuk mengasah kemampuan dan problem solving.",
  },
  { property: "og:title", content: "Proyek | Naufal Faisal" },
  {
    property: "og:description",
    content:
      "Proyek yang saya buat untuk mengasah kemampuan dan problem solving.",
  },
];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: typography },
];

export default function Proyek() {
  return <h1>Halo Proyek!</h1>;
}
