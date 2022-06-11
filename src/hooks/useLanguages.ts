import useSWR from "swr";

import { Languages } from "../types";
import { fetcher } from "../utils";

export const useRepoLanguages = (url: string) => {
  const { data, error } = useSWR<Languages>(url, fetcher);

  return {
    languages: data,
    isLoading: !error && !data,
    isError: error,
  };
};
