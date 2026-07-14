export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name?: string | null;
  company?: string | null;
  blog?: string | null;
  location?: string | null;
  email?: string | null;
  bio?: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description?: string | null;
  language?: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
}

export interface GithubEvent {
  id: string;
  type: string;
  repo: { id: number; name: string; url?: string };
  created_at: string;
  payload?: any;
}

export type LanguagesMap = Record<string, number>;

export interface AggregatedLanguage {
  name: string;
  bytes: number;
}
