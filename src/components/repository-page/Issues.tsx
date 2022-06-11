import { FC } from "react";
import { useRepoIssues } from "../../hooks";
import { Card, CardRow, CardTitle } from "../shared/Card";
import { ErrorMessage } from "../shared/ErrorMessage";
import { ExternalLink } from "../shared/ExternalLink";
import { LoadingSpinner } from "../shared/LoadingSpinner";

interface IssuesProps {
  url: string;
}

export const Issues: FC<IssuesProps> = ({ url }) => {
  const { issues, isLoading } = useRepoIssues(url);

  if (isLoading) {
    return (
      <Card>
        <LoadingSpinner />
      </Card>
    );
  }

  if (issues) {
    const issueRows = issues.map((issue) => (
      <CardRow key={issue.id}>
        {issue.title}
        &nbsp;
        <ExternalLink url={issue.html_url} isSmall />
      </CardRow>
    ));

    return (
      <Card>
        <CardTitle>Issues</CardTitle>
        {issueRows.length ? issueRows : <CardRow>No issues</CardRow>}
      </Card>
    );
  }

  return <ErrorMessage />;
};
