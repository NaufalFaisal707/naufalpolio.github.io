import { HeadersFunction, LinksFunction, MetaFunction } from "@remix-run/node";
import Container5xl from "~/components/container-5xl";
import { getBlogs } from "~/utils/blog.server";
import typography from "~/typography.css?url";
import { Input } from "~/components/ui/input";
import { ClientLoaderFunctionArgs, useLoaderData } from "@remix-run/react";
import DaftarBlog from "./daftar-blog";
import { createOGMeta } from "~/lib/open-graph";
import { useState } from "react";
import { LucideFileX2, LucideSearchX } from "~/components/icons/lucide-react";

export const meta: MetaFunction = () => {
  return createOGMeta({
    title: "Blog | Naufal Faisal",
    description:
      "Halaman blog sederhana untuk membagikan tips dan trik di waktu luang.",
    type: "website",
  });
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: typography },
];

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=3600",
});

export const loader = () => {
  return getBlogs();
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

export default function BlogIndex() {
  const loaderData = useLoaderData<typeof loader>();

  const [searchBlog, setSearchBlog] = useState("");

  function blogContent() {
    const filteredBlogs = loaderData.filter((f) => {
      return f.title.toLowerCase().includes(searchBlog.toLowerCase());
    });

    if (filteredBlogs.length === 0 && !!searchBlog) {
      return (
        <div className="flex flex-col items-center gap-4 p-8 text-center text-gray-500">
          <LucideSearchX className="h-12 w-12" />
          <span className="text-lg font-medium">
            Blog yang di cari tidak di temukan
          </span>
        </div>
      );
    }

    if (filteredBlogs.length === 0) {
      return (
        <div className="flex flex-col items-center gap-4 p-8 text-center text-gray-500">
          <LucideFileX2 className="h-12 w-12" />
          <span className="text-lg font-medium">
            Belum ada blog yang di tulis
          </span>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 gap-4">
        <DaftarBlog blogs={filteredBlogs} />
      </div>
    );
  }

  return (
    <Container5xl>
      <div className="relative mx-4 mb-4 flex min-h-fit flex-col justify-center gap-8 fade-in">
        <div className="grid gap-4 text-center">
          <h1>Blog</h1>
          <p>
            Halaman blog sederhana untuk membagikan tips dan trik di waktu
            luang.
          </p>
        </div>

        <div className="mx-auto">
          <Input
            onChange={({ target }) => setSearchBlog(target.value)}
            placeholder="Cari Berdasarkan Judul"
            className="w-fit"
            type="search"
          />
        </div>

        {blogContent()}
      </div>
    </Container5xl>
  );
}
