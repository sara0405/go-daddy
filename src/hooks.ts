import useSWR from "swr";

import { Issue, Languages, Repository } from "./types";
import { fetcher } from "./utils";

export const useRepositories = () => {
  const { data, error } = useSWR<Repository[]>(
    `https://api.github.com/orgs/godaddy/repos`,
    fetcher
  );

  return {
    repositories: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useRepository = (name?: string) => {
  const { data, error } = useSWR<Repository>(
    `https://api.github.com/repos/godaddy/${name}`,
    fetcher
  );

  if (!name) {
    return {
      repository: undefined,
      isLoading: false,
      isError: false,
    };
  }

  return {
    repository: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useRepoLanguages = (url: string) => {
  const { data, error } = useSWR<Languages>(url, fetcher);

  return {
    languages: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useRepoForks = (url: string) => {
  const { data, error } = useSWR<Repository[]>(url, fetcher);

  return {
    forks: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useRepoIssues = (url: string) => {
  const { data, error } = useSWR<Issue[]>(url, fetcher);

  return {
    issues: data,
    isLoading: !error && !data,
    isError: error,
  };
};
