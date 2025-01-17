import { MetaFunction, useLoaderData } from "@remix-run/react";
import Container5xl from "~/components/container-5xl";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import { live_project, bio_data } from "~/meta";
import { github_user_repos } from "~/types";
import { useState } from "react";

export const meta: MetaFunction = () => [
  { title: `${live_project.title} | Naufal Faisal` },
  { name: "description", content: live_project.description },
  { name: "keywords", content: "portfolio, live projects, proyek langsung" },
];

export const clientLoader = async () => {
  const githubUserRepos = await fetch(
    `https://api.github.com/users/${bio_data.github_username}/repos`,
  );

  const listPublicRepos = (await githubUserRepos.json()) as github_user_repos[];

  return listPublicRepos.filter((f) => f.topics.includes("live-project"));
};

export default function LiveProjects() {
  const loaderData = useLoaderData<typeof clientLoader>();

  const [pencarian, setPencarian] = useState("");

  function filterProjects() {
    return loaderData.filter((f) => {
      return (
        f.name?.toLowerCase().includes(pencarian.toLowerCase()) ||
        f.description?.toLowerCase().includes(pencarian.toLowerCase())
      );
    });
  }

  return (
    <>
      <section className="min-h-fit">
        <Container5xl className="px-4">
          <div className="grid h-36 place-content-center gap-2 text-center">
            <h1 className="font-serif text-4xl font-semibold md:text-5xl">
              {live_project.title}
            </h1>
            <p className="text-xs text-neutral-600 md:text-base">
              {live_project.description}
            </p>
          </div>
        </Container5xl>
      </section>

      <section className="min-h-fit">
        <Container5xl className="flex w-fit p-4">
          <Input
            placeholder="Cari Proyek"
            type="search"
            onChange={({ target }) => setPencarian(target.value)}
          />
        </Container5xl>
        <Container5xl className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {filterProjects().map(
            ({ name, description, html_url, homepage, topics }, key1) => (
              <div
                key={key1}
                className="flex flex-col gap-4 rounded-md border p-4"
              >
                <div className="truncate">
                  <a
                    href={html_url}
                    className="text-xl font-semibold hover:underline"
                    target="_blank"
                    rel="noreferrer"
                    title="Kunjungi repository"
                  >
                    {name}
                  </a>
                </div>

                <p
                  className={cn(
                    description ? "" : "italic",
                    "grow text-xs text-neutral-600",
                  )}
                >
                  {description || "Tidak ada deskripsi"}
                </p>

                <div className="flex select-none flex-wrap gap-1">
                  {topics.map((m, key2) => (
                    <Badge key={key2} variant="secondary">
                      {m}
                    </Badge>
                  ))}
                </div>

                {homepage.length > 0 ? (
                  <Button variant="outline" asChild>
                    <a href={homepage} target="_blank" rel="noreferrer">
                      Coba Sekarang
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" disabled>
                    Coba Sekarang
                  </Button>
                )}
              </div>
            ),
          )}
        </Container5xl>
      </section>
    </>
  );
}
