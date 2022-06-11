import useSWR from "swr";

import { Repository } from "../types";
import { fetcher } from "../utils";

export const useRepoForks = (url: string) => {
  const { data, error } = useSWR<Repository[]>(url, fetcher);

  return {
    forks: data,
    isLoading: !error && !data,
    isError: error,
  };
};
