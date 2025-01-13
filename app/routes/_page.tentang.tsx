import type { MetaFunction } from "@remix-run/node";
import Container5xl from "~/components/container-5xl";
import { bio_data } from "~/meta";

export const meta: MetaFunction = () => [
  { title: "Tentang | Naufal Faisal" },
  { name: "description", content: "Cerita singkat tentang saya" },
  { name: "keywords", content: "portfolio, about, tentang" },
];

export default function TentangPage() {
  return (
    <>
      <section>
        <Container5xl>
          <div className="grid h-36 place-content-center gap-2 text-center">
            <h1 className="font-serif text-4xl font-semibold md:text-5xl">
              Tentang Saya
            </h1>
            <p className="text-xs text-neutral-600 md:text-base">
              Cerita singkat tentang saya
            </p>
          </div>
        </Container5xl>
      </section>

      <section className="h-[calc(100svh_-_30rem)] min-h-fit">
        <Container5xl className="grid h-full grid-cols-1 gap-8 p-4 md:grid-cols-2 md:flex-row">
          <div className="grid grow place-content-center">
            <div className="flex h-fit w-fit rotate-3 flex-col gap-y-4 border bg-white p-4">
              <img src="/pp.jpeg" alt="my kisah" className="w-48 md:w-64" />
              <h1 className="text-end font-serif text-lg">
                - {bio_data.whoami}
              </h1>
            </div>
          </div>
          <div className="flex w-fit flex-col justify-center gap-4">
            <h1 className="font-serif text-5xl font-semibold">
              {bio_data.whoami}
            </h1>
            <p className="text-neutral-600">{bio_data.my_kisah.paragraph1}</p>
            <p className="text-neutral-600">{bio_data.my_kisah.paragraph2}</p>
            <p className="text-neutral-600">{bio_data.my_kisah.paragraph3}</p>
          </div>
        </Container5xl>
      </section>
    </>
  );
}
