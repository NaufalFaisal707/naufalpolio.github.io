import { Link, useLoaderData, useRouteLoaderData } from "@remix-run/react";
import { type MetaFunction, json } from "@vercel/remix";
import { ArrowRight } from "lucide-react";
import SocialAccout from "~/components/social-accounts";
import { Button } from "~/components/ui/button";
import { fetchGithubSocialAccount, type GithubUser } from "~/utils";

import SRemix from "/app_remix.svg?url";
import SReact from "/app_react.svg?url";
import SShadcn from "/app_shadcn.svg?url";
import SBg from "/app_bg.svg?url";

export const meta: MetaFunction = () => [
  { title: "Naufal Faisal" },
  {
    name: "description",
    content: "ini website portfolio saya.",
  },
];

export const loader = async () => {
  const social_accounts = await fetchGithubSocialAccount(
    process.env.GITHUB_USER!,
  );

  return json(social_accounts, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
};

export default function Index() {
  const routeLoaderData = useRouteLoaderData("root") as GithubUser;
  const loaderData = useLoaderData<typeof loader>();

  const { name, bio } = routeLoaderData;

  return (
    <>
      <div className="relative mx-4 flex h-[calc(100svh_-_12rem)] min-h-fit items-center">
        <div className="z-10 grid max-w-[30rem] gap-2">
          <h1 className="font-serif">{name || "Unkown Name"}</h1>
          <p className="text-neutral-600">{bio || "Unkown Bio"}</p>
          <div className="my-4">
            <Button variant="outline" asChild>
              <Link to="/tentang">
                Tentang Saya
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="flex gap-4">
            <SocialAccout social_account={loaderData} />
          </div>
        </div>

        <div className="absolute right-8 grid size-80 opacity-15 blur-sm duration-200 ease-out md:opacity-100 md:blur-none">
          <img
            src={SReact}
            alt="React logo"
            title="React"
            className="absolute left-10 duration-200 ease-in-out hover:-rotate-12 hover:scale-125 active:scale-95"
          />
          <img
            src={SRemix}
            alt="Remix logo"
            title="Remix"
            className="absolute -right-4 bottom-12 duration-200 ease-in-out hover:-rotate-12 hover:scale-125 active:scale-95"
          />
          <img
            src={SShadcn}
            alt="Shadcn logo"
            title="Shadcn/UI"
            className="absolute bottom-6 left-6 duration-200 ease-in-out hover:-rotate-12 hover:scale-125 active:scale-95"
          />
          <img src={SBg} alt="BG" className="m-auto" />
        </div>
      </div>
    </>
  );
}
