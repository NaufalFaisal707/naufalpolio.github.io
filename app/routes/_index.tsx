import { Link, useLoaderData, useRouteLoaderData } from "@remix-run/react";
import { type MetaFunction, json } from "@vercel/remix";
import { ArrowRight } from "lucide-react";
import SocialAccout from "~/components/social-accounts";
import { Button } from "~/components/ui/button";
import { fetchGithubSocialAccount, type GithubUser } from "~/utils";

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
      <div className="relative flex h-[calc(100svh_-_12rem)] min-h-fit items-center">
        <div className="grid max-w-[30rem] gap-2">
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
      </div>
    </>
  );
}
