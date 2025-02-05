import { HeadersFunction } from "@remix-run/node";
import {
  ClientLoaderFunctionArgs,
  Link,
  MetaFunction,
  useLoaderData,
  useRouteLoaderData,
} from "@remix-run/react";
import {
  LucideArrowDown,
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
import SocialAccout from "~/components/social-accounts";
import { Button } from "~/components/ui/button";
import {
  fetchGithubRepos,
  fetchGithubSocialAccount,
  GithubRepos,
  GithubSocialAccounts,
  GithubUser,
} from "~/utils";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import ProyekUnggulan from "~/components/proyek-unggulan";

export const meta: MetaFunction = () => [
  { title: "Naufal Faisal" },
  {
    name: "description",
    content: "ini website portfolio saya.",
  },
];

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=3600",
});

export const loader = async () => {
  const [social_accounts, repos] = await Promise.all([
    fetchGithubSocialAccount(process.env.GITHUB_USER!),
    (await fetchGithubRepos(process.env.GITHUB_USER!)).filter((f) =>
      f.topics.includes("featured-project"),
    ),
  ]);

  return Response.json({
    social_accounts,
    repos,
  });
};

let cacheLoader: GithubSocialAccounts | unknown;
export const clientLoader = async ({
  serverLoader,
}: ClientLoaderFunctionArgs) => {
  if (cacheLoader) {
    return cacheLoader;
  }

  cacheLoader = await serverLoader();

  return Response.json(cacheLoader);
};

export default function Index() {
  const routeLoaderData = useRouteLoaderData("root") as GithubUser;
  const loaderData = useLoaderData() as {
    social_accounts: GithubSocialAccounts[];
    repos: GithubRepos[];
  };

  const { name, bio } = routeLoaderData;

  const { social_accounts, repos } = loaderData;

  return (
    <>
      <div className="relative mx-4 flex h-[calc(100svh_-_12rem)] min-h-fit items-center">
        <div className="z-10 grid max-w-[30rem] gap-2">
          <h1 className="font-serif">{name || "Unkown Name"}</h1>
          <p className="text-neutral-600">{bio || "Unkown Bio"}</p>
          <div className="my-4 flex flex-wrap-reverse gap-2">
            <Button asChild>
              <Link to="#intro">
                Selengkapnya
                <LucideArrowDown />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/tentang">
                Tentang Saya
                <LucideArrowRight />
              </Link>
            </Button>
          </div>
          <div className="flex gap-4">
            <SocialAccout social_account={social_accounts} />
          </div>
        </div>

        <div className="absolute right-12 grid size-80 opacity-5 blur-sm duration-200 ease-out md:opacity-100 md:blur-none">
          <AppReact className="absolute left-10 duration-200 ease-in-out hover:-rotate-12 hover:scale-125 active:scale-95" />
          <AppRemix className="absolute -right-4 bottom-12 duration-200 ease-in-out hover:-rotate-12 hover:scale-125 active:scale-95" />
          <AppShadcn className="absolute bottom-6 left-6 duration-200 ease-in-out hover:-rotate-12 hover:scale-125 active:scale-95" />
          <AppBg className="m-auto" />
        </div>
      </div>

      <div
        id="intro"
        className="relative mx-4 flex min-h-fit flex-col justify-center gap-24"
      >
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

      <div className="relative mx-4 h-[calc(100svh_-_12rem)] min-h-fit">
        <div className="mb-24 grid gap-4 text-center">
          <h1>Proyek Unggulan</h1>
          <p>Proyek yang pernah saya buat.</p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <ProyekUnggulan repos={repos} />
        </div>
        <div className="mt-4 flex justify-center">
          <Button variant="ghost" asChild>
            <Link to="/proyek">
              Proyek Lainya
              <LucideArrowRight />
            </Link>
          </Button>
        </div>
      </div>

      <div />
    </>
  );
}
