import useSWR from "swr";

import { Issue } from "../types";
import { fetcher } from "../utils";

export const useRepoIssues = (url: string) => {
  const { data, error } = useSWR<Issue[]>(url, fetcher);

  return {
    issues: data,
    isLoading: !error && !data,
    isError: error,
  };
};
