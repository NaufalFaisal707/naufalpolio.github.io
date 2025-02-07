import { LucideGlobe } from "~/components/icons/lucide-react";
import {
  SimpleIconsGithub,
  SimpleIconsInstagram,
} from "~/components/icons/simple-icons";
import { fetchGithubSocialAccount } from "~/utils/fetch-github.server";

const ProviderIcon = ({
  provider,
  className,
}: {
  provider: string;
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
  social_accounts,
}: {
  social_accounts: Awaited<ReturnType<typeof fetchGithubSocialAccount>>;
}) {
  return social_accounts.map(({ provider, url }, key) => (
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
