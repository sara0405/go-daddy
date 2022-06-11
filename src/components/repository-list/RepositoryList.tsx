import { FC } from "react";
import { RepositoryCard } from "./RepositoryCard";
import { useRepositories } from "../../hooks";
import { LoadingSpinner } from "../shared/LoadingSpinner";
import { ErrorMessage } from "../shared/ErrorMessage";

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
