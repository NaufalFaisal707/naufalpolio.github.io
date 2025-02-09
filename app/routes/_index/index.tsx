import { HeadersFunction, LinksFunction } from "@remix-run/node";
import {
  ClientLoaderFunctionArgs,
  Link,
  MetaFunction,
  useLoaderData,
} from "@remix-run/react";
import {
  LucideArrowRight,
  LucideKeyRound,
  LucideRepeat2,
  LucideServer,
} from "~/components/icons/lucide-react";
import {
  AppBg,
  AppReact,
  AppRemix,
  AppShadcn,
} from "~/components/icons/my-icons";
import SocialAccout from "./social-accounts";
import { Button } from "~/components/ui/button";
import {
  fetchGithubProfile,
  fetchGithubRepos,
  fetchGithubSocialAccount,
} from "~/utils/fetch-github.server";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import ProyekUnggulan from "./proyek-unggulan";
import Container5xl from "~/components/container-5xl";
import typography from "~/typography.css?url";
import { createOGMeta } from "~/lib/open-graph";

export const meta: MetaFunction = () => {
  return createOGMeta({
    title: "Naufal Faisal",
    description: "Selamat datang di website portfolio saya.",
    image: "/banner/beranda.png",
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
  const github_profile = await fetchGithubProfile();
  const social_accounts = await fetchGithubSocialAccount();
  const repos = (await fetchGithubRepos()).filter((f) =>
    f.topics?.includes("featured-project"),
  );

  return {
    github_profile,
    social_accounts,
    repos,
  };
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

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();

  const { github_profile, social_accounts, repos } = loaderData;

  const { name, bio } = github_profile;

  return (
    <Container5xl className="space-y-24">
      <div className="relative mx-4 flex h-[calc(100svh_-_12rem)] min-h-fit items-center fade-in">
        <div className="z-10 grid max-w-[30rem] gap-2">
          <h1 className="font-serif">{name || "Unkown Name"}</h1>
          <p className="text-neutral-600">{bio || "Unkown Bio"}</p>
          <div className="my-4 flex flex-wrap-reverse gap-2">
            <Button variant="outline" asChild>
              <Link to="/tentang">
                Tentang Saya
                <LucideArrowRight />
              </Link>
            </Button>
          </div>
          <div className="flex gap-4">
            <SocialAccout social_accounts={social_accounts} />
          </div>
        </div>

        <div className="absolute right-12 grid size-80 opacity-5 blur-sm duration-200 ease-out md:opacity-100 md:blur-none">
          <AppReact className="absolute left-10 duration-200 ease-in-out hover:-rotate-12 hover:scale-125 active:scale-95" />
          <AppRemix className="absolute -right-4 bottom-12 duration-200 ease-in-out hover:-rotate-12 hover:scale-125 active:scale-95" />
          <AppShadcn className="absolute bottom-6 left-6 duration-200 ease-in-out hover:-rotate-12 hover:scale-125 active:scale-95" />
          <AppBg className="m-auto" />
        </div>
      </div>

      <div className="relative mx-4 flex min-h-fit flex-col justify-center gap-24 fade-in">
        <div className="grid gap-4 text-center">
          <h1>Efisiensi &amp; Keamanan</h1>
          <p>
            Langkah yang saya lakukan untuk menjaga Efisiensi dan Keamanan dari
            sisi server dan client di waktu yang sama.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <LucideKeyRound className="size-12" />
            </CardHeader>
            <CardContent>
              <h3>Authenticator</h3>
              <p className="text-neutral-600">
                Token-Based Authentication dengan Remix.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <LucideServer className="size-12" />
            </CardHeader>
            <CardContent>
              <h3>Server Action &amp; Loader</h3>
              <p className="text-neutral-600">
                Menggunakan server Action dan Loader pada Remix.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <LucideRepeat2 className="size-12" />
            </CardHeader>
            <CardContent>
              <h3>Caching</h3>
              <p className="text-neutral-600">
                Melakukan Caching data pada Remix.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="relative mx-4 h-[calc(100svh_-_12rem)] min-h-fit fade-in">
        <div className="mb-24 grid gap-4 text-center">
          <h1>Proyek Unggulan</h1>
          <p>Proyek yang pernah saya buat.</p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <ProyekUnggulan repos={repos} />
        </div>
        <div className="mt-4 flex justify-center">
          <Button variant="outline" asChild>
            <Link to="/proyek">
              Proyek Lainya
              <LucideArrowRight />
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative mx-4 h-[calc(100svh_-_12rem)] min-h-fit fade-in">
        <div className="mb-24 grid gap-4 text-center">
          <h1>My Kisah</h1>
          <p>My kisah berdasarkan kisah my</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <h1>2025</h1>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600">My Kisah</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h1>2024</h1>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600">My Kisah</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h1>2023</h1>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600">My Kisah</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-4 flex justify-center">
          <Button variant="outline" asChild>
            <Link to="/proyek">
              Selengkapnya
              <LucideArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </Container5xl>
  );
}
