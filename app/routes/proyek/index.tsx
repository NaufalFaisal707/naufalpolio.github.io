import { HeadersFunction, LinksFunction } from "@remix-run/node";
import {
  ClientLoaderFunctionArgs,
  MetaFunction,
  useLoaderData,
} from "@remix-run/react";
import Container5xl from "~/components/container-5xl";
import { Input } from "~/components/ui/input";
import { createOGMeta } from "~/lib/open-graph";
import typography from "~/typography.css?url";
import DaftarProyek from "./daftar-proyek";
import { fetchGithubRepos } from "~/utils/fetch-github.server";
import { LucideFileX2, LucideSearchX } from "~/components/icons/lucide-react";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return createOGMeta({
    title: "Proyek | Naufal Faisal",
    description:
      "Beberapa proyek yang saya buat untuk mengasah Skill dan Problem Solving.",
    type: "website",
  });
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: typography },
];

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=3600",
});

export const loader = async () => {
  return (await fetchGithubRepos()).filter((f) => {
    return f.topics?.includes("my-project");
  });
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

export default function Proyek() {
  const loaderData = useLoaderData<typeof loader>();

  const [searchProyek, setSearchProyek] = useState("");

  function proyekContent() {
    const filteredProyek = loaderData.filter((f) => {
      return f.name.toLowerCase().includes(searchProyek.toLowerCase());
    });

    if (filteredProyek.length === 0 && !!searchProyek) {
      return (
        <div className="flex flex-col items-center gap-4 p-8 text-center text-gray-500">
          <LucideSearchX className="h-12 w-12" />
          <span className="text-lg font-medium">
            Proyek yang di cari tidak di temukan
          </span>
        </div>
      );
    }

    if (filteredProyek.length === 0) {
      return (
        <div className="flex flex-col items-center gap-4 p-8 text-center text-gray-500">
          <LucideFileX2 className="h-12 w-12" />
          <span className="text-lg font-medium">
            Belum ada proyek yang di publis
          </span>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 gap-4">
        <DaftarProyek repos={filteredProyek} />
      </div>
    );
  }

  return (
    <Container5xl>
      <div className="relative mx-4 mb-4 flex min-h-fit flex-col justify-center gap-8 fade-in">
        <div className="grid gap-4 text-center">
          <h1>Proyek</h1>
          <p>
            Beberapa proyek yang saya buat untuk mengasah Skill dan Problem
            Solving.
          </p>
        </div>

        <div className="mx-auto">
          <Input
            onChange={({ target }) => setSearchProyek(target.value)}
            placeholder="Cari Berdasarkan Judul"
            className="w-fit"
            type="search"
          />
        </div>

        {proyekContent()}
      </div>
    </Container5xl>
  );
}
