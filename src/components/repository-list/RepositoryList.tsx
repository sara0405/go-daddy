import { FC } from "react";

import { useRepositories } from "../../hooks";
import { ErrorMessage } from "../shared/ErrorMessage";
import { LoadingSpinner } from "../shared/LoadingSpinner";
import { RepositoryCard } from "./RepositoryCard";

export const RepositoryList: FC = () => {
  const { isLoading, repositories } = useRepositories();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (repositories) {
    return (
      <>
        {repositories.map((repo) => (
          <RepositoryCard key={repo.id} repository={repo} />
        ))}
      </>
    );
  }

  return <ErrorMessage />;
};
