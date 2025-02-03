import { Globe2 } from "lucide-react";
import { type GithubSocialAccounts } from "~/utils";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";

const ProviderIcon = ({ provider }: GithubSocialAccounts) => {
  if (provider === "github") {
    return <SiGithub />;
  }

  if (provider === "instagram") {
    return <SiInstagram />;
  }

  return <Globe2 />;
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
