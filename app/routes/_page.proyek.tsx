import { MetaFunction } from "@remix-run/node";
import Container5xl from "~/components/container-5xl";

export const meta: MetaFunction = () => {
  return [
    { title: "Proyek | Naufal Faisal" },
    { name: "description", content: "Beberapa proyek yang sudah saya buat" },
    { name: "keywords", content: "portfolio, projects, proyek" },
  ];
};

export default function ProyekPage() {
  return (
    <section className="mx-4 h-[calc(100svh_-_6rem)]">
      <Container5xl>
        <div className="grid h-36 place-content-center gap-2 text-center">
          <h1 className="font-serif text-4xl font-semibold md:text-5xl">
            Proyek
          </h1>
          <p className="text-xs text-neutral-500 md:text-base">
            Beberapa proyek yang sudah saya buat
          </p>
        </div>
      </Container5xl>
    </section>
  );
}
