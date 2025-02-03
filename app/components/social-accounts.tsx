import { LucideGlobe } from "./icons/lucide-react";
import { GithubSocialAccounts, Provider } from "~/utils";
import { SimpleIconsGithub, SimpleIconsInstagram } from "./icons/simple-icons";

const ProviderIcon = ({
  provider,
  className,
}: {
  provider: Provider;
  className?: string;
}) => {
  if (provider === "github") {
    return <SimpleIconsGithub className={className} />;
  }

  if (provider === "instagram") {
    return <SimpleIconsInstagram className={className} />;
  }

  return <LucideGlobe className={className} />;
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
      <ProviderIcon provider={provider} className="size-6" />
    </a>
  ));
}
