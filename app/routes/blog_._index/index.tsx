import { HeadersFunction, LinksFunction, MetaFunction } from "@remix-run/node";
import Container5xl from "~/components/container-5xl";
import { getBlogs } from "~/utils/blog.server";
import typography from "~/typography.css?url";
import { Input } from "~/components/ui/input";
import { useLoaderData } from "@remix-run/react";
import DaftarBlog from "./daftar-blog";

export const meta: MetaFunction = () => [
  { title: "Naufal Faisal" },
  {
    name: "description",
    content: "ini website portfolio saya.",
  },
];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: typography },
];

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=3600",
});

export const loader = () => {
  return getBlogs();
};

export default function BlogIndex() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <Container5xl>
      <div className="relative mx-4 flex min-h-fit flex-col justify-center gap-8 fade-in">
        <div className="grid gap-4 text-center">
          <h1>Blog Saya</h1>
          <p>Blog sederhana yang saya tulis.</p>
        </div>

        <div className="w-full">
          <Input
            placeholder="Cari Berdasarkan Judul"
            className="mx-auto w-fit"
            type="search"
          />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <DaftarBlog blogs={loaderData} />
        </div>
      </div>
    </Container5xl>
  );
}
