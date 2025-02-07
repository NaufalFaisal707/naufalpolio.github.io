import { LinksFunction } from "@remix-run/node";
import codeSyntax from "~/starry-night.css?url";
import MDX from "./article.mdx";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: codeSyntax },
];

export default function article() {
  return (
    <article className="prose prose-sm mx-auto p-4 md:prose-lg">
      <MDX />
    </article>
  );
}
