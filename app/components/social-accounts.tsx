import { type GithubSocialAccounts } from "~/utils";
import Monicon from "@monicon/react";

const ProviderIcon = ({ provider }: GithubSocialAccounts) => {
  if (provider === "github") {
    return <Monicon name="simple-icons:github" />;
  }

  if (provider === "instagram") {
    return <Monicon name="simple-icons:instagram" />;
  }

  return <Monicon name="lucide:globe" />;
};

export default function SocialAccout({
  social_account,
}: {
  social_account: GithubSocialAccounts[];
}) {
  return social_account.map(({ provider, url }, key) => (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      title={provider}
      key={key}
      className="text-neutral-600 duration-150 ease-in-out hover:text-neutral-950"
    >
      <ProviderIcon url="" provider={provider} />
    </a>
  ));
}
