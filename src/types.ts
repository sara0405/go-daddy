export type Repository = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  languages_url: string;
  forks_url: string;
  issues_url: string;
  watchers: number;
};

export type Issue = {
  id: number;
  title: string;
  html_url: string;
};

export type Languages = Record<string, number>;
