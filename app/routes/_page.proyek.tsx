import { MetaFunction } from "@remix-run/node";
import Container5xl from "~/components/container-5xl";
import { Button } from "~/components/ui/button";
import { projects } from "~/meta";

export const meta: MetaFunction = () => [
  { title: "Proyek | Naufal Faisal" },
  { name: "description", content: "Beberapa proyek yang sudah saya buat" },
  { name: "keywords", content: "portfolio, projects, proyek" },
];

export default function ProyekPage() {
  return (
    <>
      <section className="mx-4">
        <Container5xl>
          <div className="grid h-36 place-content-center gap-2 text-center">
            <h1 className="font-serif text-4xl font-semibold md:text-5xl">
              Proyek
            </h1>
            <p className="text-xs text-neutral-600 md:text-base">
              Beberapa proyek yang sudah saya buat
            </p>
          </div>
        </Container5xl>
      </section>

      <section className="mx-4">
        <Container5xl className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(
            ({ title, icon: Icon, description, project_url, tech }, key1) => (
              <div
                key={key1}
                className="flex h-fit flex-col gap-4 rounded-lg border p-4"
              >
                <a
                  href={project_url}
                  className="flex w-fit items-center gap-2 text-2xl font-semibold hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon /> {title}
                </a>

                <p className="grow text-sm text-neutral-600">{description}</p>

                <div>
                  <span className="text-sm text-neutral-600">Tools:</span>
                  <div className="flex flex-wrap items-center gap-2">
                    {tech.map(({ title, icon: Icon, url }, key2) => {
                      return (
                        <Button
                          key={key2}
                          title={title}
                          size="icon"
                          variant="secondary"
                          asChild
                        >
                          <a href={url} target="_blank" rel="noreferrer">
                            <Icon className="size-5" />
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ),
          )}
        </Container5xl>
      </section>
    </>
  );
}
