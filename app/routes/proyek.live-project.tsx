import { useLoaderData } from "@remix-run/react";
import Container5xl from "~/components/container-5xl";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { live_project, bio_data } from "~/meta";
import { github_user_repos } from "~/types";

export const clientLoader = async () => {
  const githubUserRepos = await fetch(
    `https://api.github.com/users/${bio_data.github_username}/repos`,
  );

  const listPublicRepos = (await githubUserRepos.json()) as github_user_repos[];

  console.log(listPublicRepos);

  return listPublicRepos.filter((f) => f.topics.includes("live-project"));
};

export default function LiveProjects() {
  const loaderData = useLoaderData<typeof clientLoader>();

  return (
    <>
      <section className="min-h-fit">
        <Container5xl className="p-4">
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
        <Container5xl className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {loaderData.map(
            ({ name, description, html_url, homepage, topics }, key1) => (
              <div
                key={key1}
                className="flex flex-col gap-4 rounded-md border p-4"
              >
                <a
                  href={html_url}
                  className="flex w-full items-center gap-2 text-lg font-semibold hover:underline lg:text-2xl"
                  target="_blank"
                  rel="noreferrer"
                  title="Kunjungi repository"
                >
                  <span className="truncate">{name}</span>
                </a>

                <p
                  className={cn(
                    description ? "" : "italic",
                    "grow text-sm text-neutral-600 lg:text-base",
                  )}
                >
                  {description || "Tidak ada deskripsi"}
                </p>

                <div className="flex select-none flex-wrap *:rounded *:bg-neutral-100 *:p-1 *:text-[12px] *:text-neutral-600">
                  {topics.map((m, key2) => (
                    <span key={key2}>{m}</span>
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
