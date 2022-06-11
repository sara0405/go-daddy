import useSWR from "swr";

import { Repository } from "../types";
import { fetcher } from "../utils";

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
