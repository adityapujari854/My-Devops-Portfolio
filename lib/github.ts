import type { GithubRepo, GithubUser, GithubEvent, LanguagesMap } from "../types/github";

const TOKEN = process.env.GITHUB_TOKEN || process.env.NEXT_PUBLIC_GITHUB_TOKEN || "";

async function fetchFromGitHub<T = any>(url: string): Promise<T | null> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };
  if (TOKEN) headers["Authorization"] = `token ${TOKEN}`;

  const res = await fetch(url, { headers });
  if (!res.ok) return null;
  return res.json();
}

export async function getProfile(username: string): Promise<GithubUser | null> {
  return fetchFromGitHub<GithubUser>(`https://api.github.com/users/${username}`);
}

export async function getRepositories(username: string): Promise<GithubRepo[] | null> {
  // fetch up to 100 repos sorted by updated date
  return fetchFromGitHub<GithubRepo[]>(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
  );
}

export async function getRecentActivity(username: string, per_page = 10): Promise<GithubEvent[] | null> {
  return fetchFromGitHub<GithubEvent[]>(
    `https://api.github.com/users/${username}/events?per_page=${per_page}`
  );
}

export async function getRepoLanguages(owner: string, repo: string): Promise<LanguagesMap | null> {
  return fetchFromGitHub<LanguagesMap>(`https://api.github.com/repos/${owner}/${repo}/languages`);
}

export async function getLanguages(username: string): Promise<LanguagesMap | null> {
  const repos = await getRepositories(username);
  if (!repos) return null;

  const langsList = await Promise.all(
    repos.map((r) => getRepoLanguages(username, r.name))
  );

  const agg: LanguagesMap = {};
  for (const obj of langsList) {
    if (!obj) continue;
    for (const [lang, bytes] of Object.entries(obj)) {
      agg[lang] = (agg[lang] || 0) + (bytes as number);
    }
  }
  return agg;
}

export async function getPinnedRepos(username: string, limit = 6): Promise<GithubRepo[] | null> {
  const repos = await getRepositories(username);
  if (!repos) return null;

  // prefer starred then recently updated
  const sorted = repos
    .slice()
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count)
        return b.stargazers_count - a.stargazers_count;
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    })
    .slice(0, limit);
  return sorted;
}

export async function getGitHubUser(username: string): Promise<GithubUser | null> {
  return getProfile(username);
}
