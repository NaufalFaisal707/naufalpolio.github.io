import { Octokit } from "@octokit/core";

if (!process.env.GITHUB_USER || !process.env.GITHUB_TOKEN) {
  throw new Error("Github credentials not found in environment variables");
}

const github_username = process.env.GITHUB_USER;

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const octokit_config = {
  username: github_username,
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
};

export async function fetchGithubProfile() {
  const response = await octokit.request(
    "GET /users/{username}",
    octokit_config,
  );

  if (response.status !== 200) {
    throw new Error(`Failed to fetch Github profile: ${response.status}`);
  }

  return response.data;
}

export async function fetchGithubRepos() {
  const response = await octokit.request(
    "GET /users/{username}/repos",
    octokit_config,
  );

  if (response.status !== 200) {
    throw new Error(`Failed to fetch Github repos: ${response.status}`);
  }

  return response.data;
}

export async function fetchGithubSocialAccount() {
  const response = await octokit.request(
    "GET /users/{username}/social_accounts",
    octokit_config,
  );

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch Github social accounts: ${response.status}`,
    );
  }

  return [
    {
      provider: "github",
      url: "https://github.com/" + github_username,
    },
    ...response.data,
  ];
}
