import type { MetaFunction } from "@remix-run/node";
import Container5xl from "~/components/container-5xl";

export const meta: MetaFunction = () => {
  return [
    { title: "Tentang | Naufal Faisal" },
    { name: "description", content: "Cerita singkat tentang saya" },
  ];
};

export default function PageTentang() {
  return (
    <>
      <section className="mx-4">
        <Container5xl>
          <div className="grid h-36 place-content-center gap-2 text-center">
            <h1 className="font-serif text-4xl font-semibold md:text-5xl">
              Tentang Saya
            </h1>
            <p className="text-xs text-neutral-500 md:text-base">
              Cerita singkat tentang saya
            </p>
          </div>
        </Container5xl>
      </section>
      <section className="mx-4">
        <Container5xl>
          <div>hello kisah</div>
        </Container5xl>
      </section>
    </>
  );
}
