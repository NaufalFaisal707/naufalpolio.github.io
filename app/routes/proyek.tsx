import { LinksFunction } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";
import { createOGMeta } from "~/lib/open-graph";
import typography from "~/typography.css?url";

export const meta: MetaFunction = () => {
  return createOGMeta({
    title: "Proyek | Naufal Faisal",
    description:
      "Proyek yang saya buat untuk mengasah kemampuan dan problem solving.",
    type: "website",
  });
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: typography },
];

export default function Proyek() {
  return <h1>Halo Proyek!</h1>;
}
