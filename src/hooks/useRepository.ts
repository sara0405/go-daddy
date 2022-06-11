import useSWR from "swr";

import { Repository } from "../types";
import { fetcher } from "../utils";

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
