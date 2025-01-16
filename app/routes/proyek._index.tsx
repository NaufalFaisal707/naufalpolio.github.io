import { Link, MetaFunction } from "@remix-run/react";
import { Construction, ExternalLink } from "lucide-react";
import Container5xl from "~/components/container-5xl";
import { Button } from "~/components/ui/button";
import { project_categories } from "~/meta";

export const meta: MetaFunction = () => [
  { title: "Proyek | Naufal Faisal" },
  { name: "description", content: "Beberapa proyek yang sudah saya buat" },
  { name: "keywords", content: "portfolio, projects, proyek" },
];

export default function ProyekCategories() {
  return (
    <>
      <section className="min-h-fit">
        <Container5xl className="px-4">
          <div className="grid h-36 place-content-center gap-2 text-center">
            <h1 className="font-serif text-4xl font-semibold md:text-5xl">
              Proyek
            </h1>
            <p className="text-xs text-neutral-600 md:text-base">
              Beberapa kategori proyek yang sudah saya buat
            </p>
          </div>
        </Container5xl>
      </section>

      <section className="min-h-fit">
        <Container5xl className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {project_categories.map(
            ({ title, icon: Icon, description, tag, is_avaliable }, key) => (
              <div
                key={key}
                className="flex flex-col gap-4 rounded-md border p-4"
              >
                <span className="flex items-center gap-2 text-xl font-semibold">
                  <Icon /> {title}
                </span>
                <p className="grow text-xs text-neutral-600">{description}</p>
                <Button asChild variant="outline">
                  <Link to={tag}>
                    {is_avaliable ? (
                      <>
                        Kunjungi Sekarang <ExternalLink />
                      </>
                    ) : (
                      <>
                        Segera Hadir <Construction />
                      </>
                    )}
                  </Link>
                </Button>
              </div>
            ),
          )}
        </Container5xl>
      </section>
    </>
  );
}
