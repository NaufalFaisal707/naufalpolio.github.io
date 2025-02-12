import { HeadersFunction, LoaderFunctionArgs, MetaArgs } from "@remix-run/node";
import { ClientLoaderFunctionArgs, Outlet } from "@remix-run/react";
import { createOGMeta } from "~/lib/open-graph";
import { Frontmatter, getCurentBlog } from "~/utils/blog.server";

export const meta = ({ data }: MetaArgs) => {
  if (!data) {
    return [];
  }

  const { title, description } = data as Frontmatter;

  return createOGMeta({
    title,
    description,
    type: "website",
  });
};

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=3600",
});

export const loader = ({ request }: LoaderFunctionArgs) => {
  const target_blog = new URL(request.url).pathname
    .slice(1)
    .split("/")
    .join(".");

  return getCurentBlog(target_blog);
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

export default function BlogPose() {
  return (
    <article className="prose prose-sm mx-auto p-4 md:prose-lg">
      <Outlet />
    </article>
  );
}
