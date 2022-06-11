import { FC } from "react";

import { useRepoForks } from "../../hooks";
import { Card, CardRow, CardTitle } from "../shared/Card";
import { ErrorMessage } from "../shared/ErrorMessage";
import { ExternalLink } from "../shared/ExternalLink";
import { LoadingSpinner } from "../shared/LoadingSpinner";

interface ForksProps {
  url: string;
}

export const Forks: FC<ForksProps> = ({ url }) => {
  const { forks, isLoading } = useRepoForks(url);

  if (isLoading) {
    return (
      <Card>
        <LoadingSpinner />
      </Card>
    );
  }

  if (forks) {
    const forkRows = forks.map((fork) => (
      <CardRow key={fork.id}>
        {fork.full_name}&nbsp;
        <ExternalLink url={fork.html_url} isSmall />
      </CardRow>
    ));

    return (
      <Card>
        <CardTitle>Forks</CardTitle>
        {forkRows}
      </Card>
    );
  }

  return <ErrorMessage />;
};
