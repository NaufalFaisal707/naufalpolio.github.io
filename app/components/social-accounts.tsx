import { type GithubSocialAccounts } from "~/utils";
import { Icon } from "@iconify/react";

const ProviderIcon = ({ provider }: GithubSocialAccounts) => {
  if (provider === "github") {
    return <Icon icon="simple-icons:github" height={24} />;
  }

  if (provider === "instagram") {
    return <Icon icon="simple-icons:instagram" height={24} />;
  }

  return <Icon icon="lucide:globe" height={24} />;
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
