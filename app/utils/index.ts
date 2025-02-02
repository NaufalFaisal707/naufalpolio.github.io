export type GithubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

export async function fetchGithubProfile(
  username: string,
): Promise<GithubUser> {
  const response = await fetch("https://api.github.com/users/" + username);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch Github profile: ${response.status} ${response.statusText}`,
    );
  }

  return await response.json();
}

export type GithubSocialAccounts = {
  provider: "github" | "linkedin" | "youtube" | "facebook" | "instagram";
  url: string;
};

export async function fetchGithubSocialAccount(
  username: string,
): Promise<GithubSocialAccounts[]> {
  const response = await fetch(
    "https://api.github.com/users/" + username + "/social_accounts",
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch Github social accounts: ${response.status} ${response.statusText}`,
    );
  }

  return [
    {
      provider: "github",
      url: "https://github.com/" + username,
    },
    ...(await response.json()),
  ];
}
