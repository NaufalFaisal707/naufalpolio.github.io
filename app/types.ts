import {
  fetchGithubProfile,
  fetchGithubRepos,
  fetchGithubSocialAccount,
} from "./utils/fetch-github.server";

export type RootResponse = {
  github_profile: Awaited<ReturnType<typeof fetchGithubProfile>>;
  social_accounts: Awaited<ReturnType<typeof fetchGithubSocialAccount>>;
  repos: Awaited<ReturnType<typeof fetchGithubRepos>>;
};
